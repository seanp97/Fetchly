
class Fetchly {

    constructor(baseURL = '') {
        this.baseURL = baseURL;
    }

    async request(endpoint, options = {}) {
        try {
            const response = await fetch(this.baseURL + endpoint, options);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error('Fetch Error:', error);
            throw error;
        }
    }
    
    get(endpoint, headers = {}) {
        return this.request(endpoint, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            ...headers
            }
        });
    }
    
    post(endpoint, body = {}, headers = {}) {
        return this.request(endpoint, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            ...headers
            },
            body: JSON.stringify(body)
        });
    }
    
    put(endpoint, body = {}, headers = {}) {
        return this.request(endpoint, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            ...headers
            },
            body: JSON.stringify(body)
        });
    }
    
    delete(endpoint, headers = {}) {
        return this.request(endpoint, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            ...headers
          }
        });
    }

    patch(endpoint, headers = {}) {
        return this.request(endpoint, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              ...headers
            }
        });
    }

}
