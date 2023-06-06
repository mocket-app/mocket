/*
Test file for testing all mock endpoint functionality, including:
  - expect query columns on frontend properly reflected in resulting API data
  - expect cache hit to return data that matches query columns
*/

// import { assert } from 'console';
const request = require('supertest');
const server = 'http://localhost:3000';

describe('mock test suite', () => {
  
  // IT - will send request to /export endpoint, passing in sample data
  it('exports sample data as JSON file', () => {
    
    // EXPECT - will expect output to be a JSON file
    return request(server)
      .get('/mock')
      .expect(200)
      .expect('Content-Type', /json/)
  });

  // IT - will send request to /export endpoint, passing in sample data, and return JSON data that matches query columns
  it('exports correct data, ensuring export matches input sample data', () => {
    // EXPECT - expect query columns on frontend properly reflected in resulting API data
    // test data:
      // columns / query
    const mockQuery = [
        {
        "name":"stocks",
        "type":"Stock Name"
        },
        {
        "name":"username",
        "type":"Username"
        }
    ]
    
    const response = request(server)
      .post('/mock')
      .send({ mockQuery })
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        const first = res.body[0] 
        mockQuery.forEach( el =>{
          expect(first.hasOwnProperty(el.name)).toEqual(true)
        })
      })

  });

  const mockQueryCacheTest = [
      {
      "name":"stocks",
      "type":"Stock Name"
      },
      {
      "name":"username",
      "type":"Username"
      },
      {
      "name":"car_year",
      "type":"Car Model Year"
      },
  ]
  
  // IT - will return cache miss if mockQuery is not in redis
  it('will return cache miss if mockQuery is not in redis', () => {
    return request(server)
      .post('/mock')
      .send({ mockQueryCacheTest })
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.body.cacheHit).toEqual(false)
    })
  })

  // IT - will return cache hit if mockQuery is in redis
  it('will return data from redis from a cache hit', () => {
    return request(server)
      .post('/mock')
      .send({ mockQueryCacheTest })
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.body.cacheHit).toEqual(true)
    })
  })
})