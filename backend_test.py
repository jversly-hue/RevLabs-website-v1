import requests
import sys
from datetime import datetime
import json

class RevLabsAPITester:
    def __init__(self, base_url="https://revlabs-demo.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)}")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")

            return success, response.json() if response.headers.get('content-type', '').startswith('application/json') else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            return False, {}
        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection error")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        success, response = self.run_test(
            "API Root",
            "GET",
            "api/",
            200
        )
        return success

    def test_contact_form_submission(self):
        """Test contact form submission with valid data"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+31612345678",
            "company_name": "Test Company BV",
            "industry": "hvac",
            "message": "This is a test message for the contact form."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "api/contact",
            200,
            data=test_data
        )
        
        if success and response:
            if response.get('success') == True and 'id' in response:
                print(f"   Contact ID: {response['id']}")
                return True
            else:
                print(f"❌ Invalid response format: {response}")
                return False
        return success

    def test_contact_form_validation(self):
        """Test contact form validation with invalid data"""
        # Test missing required fields
        invalid_data = {
            "name": "",  # Empty name
            "email": "invalid-email",  # Invalid email
            "phone": "123",  # Too short phone
            "company_name": "",  # Empty company
            "industry": "invalid",  # Invalid industry
            "message": "Test message"
        }
        
        success, response = self.run_test(
            "Contact Form Validation (Invalid Data)",
            "POST",
            "api/contact",
            422,  # Expecting validation error
            data=invalid_data
        )
        return success

    def test_get_contacts(self):
        """Test getting contact submissions"""
        success, response = self.run_test(
            "Get Contact Submissions",
            "GET",
            "api/contacts",
            200
        )
        
        if success and isinstance(response, list):
            print(f"   Found {len(response)} contact submissions")
            return True
        return success

def main():
    print("🚀 Starting RevLabs API Tests")
    print("=" * 50)
    
    # Setup
    tester = RevLabsAPITester()
    
    # Run tests
    print("\n📡 Testing API connectivity...")
    tester.test_api_root()
    
    print("\n📝 Testing Contact Form...")
    tester.test_contact_form_submission()
    tester.test_contact_form_validation()
    tester.test_get_contacts()
    
    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())