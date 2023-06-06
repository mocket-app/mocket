/*
Test file for testing all data export functionality, including:
  - Exporting sample data, ensure that JSON file is created
  - Exports correct data, ensure matches input sample data
*/
import request from 'supertest';
const server = 'http://localhost:3000';

describe('export test suite', () => {
  
  // IT - will send request to /export endpoint, passing in sample data
  it('exports sample data as JSON file', () => {
    
    // EXPECT - will expect output to be a JSON file
    return request(server)
      .get('/export')
      .expect(200)
      .expect('Content-Type', /json/)
  });

  // IT - will send request to /export endpoint, passing in sample data
  it('exports correct data, ensuring export matches input sample data', () => {
    // EXPECT - will expect output to match input sample data, comparing input columns/keys in the JSON file
    
  });
})