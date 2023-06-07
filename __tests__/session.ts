/*
Test file for testing all mock endpoint functionality, including:
  - valid user creates a valid session
  - session expiration
*/

describe('session test suite', () => {

  it('will fail a dummy test', () => {
    expect(true).toEqual(false)
  })
  
  // valid user created for new user - backend sends 
  it('valid user session created for new user', () => {

    // mock user data
    const mockUserData = {
      user_id: 4151,
      user_name: 'test_user',
      user_email: 'testmail@mail.com'
    }

    // send req to backend, sending mock "user data" resembling google auth token
      // ( on backend, middleware will create a new user in sql db, start a new session for that user, and return a session cookie )    
    
    // Extract session cookie from response headers
    const sessionCookie = response.headers['set-cookie'][0];

    // Get user ID from sql db invoking request to 'sql find' middleware

    // compare the user ID from the session cookie to the user ID from the sql db

  })

  it('session cookie expires after 1 hour', async () => {
    // Create a new user & return session cookie
    const createUserResponse = await request(app)
      .post('/auth')
      .send({ username: 'testuser', password: 'testpassword' })
      .expect(201);

    // Extract session cookie from response headers
    const sessionCookie = createUserResponse.headers['set-cookie'][0];

    // Fast-forward Jest timer by 1 hour to simulate session expiration
    jest.advanceTimersByTime(60 * 60 * 1000);

    // Send request to protected endpoint with expired session cookie
    const protectedResponse = await request(app)
      .get('/auth')
      .set('Cookie', sessionCookie)
      .expect(401);

    // Expect response to have a 'Set-Cookie' header that clears the session cookie
    expect(protectedResponse.headers['set-cookie']).toBeDefined();
    expect(protectedResponse.headers['set-cookie'][0]).toMatch(/session=;/);
  });


})