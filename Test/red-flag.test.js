const expect = require('expect.js');
const request = require('supertest');
const { app } = require('../index');

let testID = 1;

describe('Red-flag test (Post "/api/v1/red-flags")', () => {
  it('should save Red-flag into the memory and respond appropriately', (done) => {
    const testText = {
      createdBy: 1,
      type: 'red-flag',
      name: 'silly Tega',
      location: '1298,20',
      status: 'pending',
      comment: "this is a shade's data",
      images: 'tegaa.png',
      videos: 'tegaa.png',
    };

    request(app)
      .post('/api/v1/red-flags')
      .send(testText)
      .expect(201)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body.message).to.eql('Created red-flag record');
        testID = res.body.id;
      })
      .end(done);
  });

  it('should fail to save Red-flag into the memory because of wrong data and respond appropriately', (done) => {
    const testText = {
      createdBy: 'timothy',
      type: 'red-flag',
      name: 'silly Tega',
      location: '1298,20',
      status: 'pending',
      comment: "this is a shade's data",
      images: 'tegaa.png',
      videos: 'tegaa.png',
    };

    request(app)
      .post('/api/v1/red-flags')
      .send(testText)
      .expect(400)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).to.eql('"createdBy" must be a number');
      })
      .end(done);
  });
});

describe('Red-flag test (Get "/api/v1/red-flags")', () => {
  it('should fetch all Red-flag records in memory', (done) => {
    request(app)
      .get('/api/v1/red-flags')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).to.be.an('array');
      })
      .end(done);
  });
});

describe('Red-flag test (Get "/api/v1/red-flags/:id")', () => {
  it(`should fetch an Red-flag record with specified id "${testID}" from memory`, (done) => {
    request(app)
      .get(`/api/v1/red-flags/${testID}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).to.be.an('object');
      })
      .end(done);
  });
});

describe('Red-flag test (Patch "/api/v1/red-flags/:id/location")', () => {
  it(`should edit the record's location with specified id "${testID}" from memory`, (done) => {
    const newLocation = {
      location: '190,90',
    };
    request(app)
      .patch(`/api/v1/red-flags/${testID}/location`)
      .send(newLocation)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body.message).to.eql('updated red-flag record\'s location');
        expect(res.body.id).to.eql(testID);
      })
      .end(done);
  });

  it('should fail to edit the record\'s location because of wrong data entry', (done) => {
    const newComment = {
      comment: 'Edited comment for testing',
    };
    request(app)
      .patch(`/api/v1/red-flags/${testID}/location`)
      .send(newComment)
      .expect(400)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).to.eql('update data is wrong. check data');
      })
      .end(done);
  });

  it('should should not find id to edit', (done) => {
    const newComment = {
      comment: 'Edited comment for testing',
    };
    request(app)
      .patch('/api/v1/red-flags/0/location')
      .send(newComment)
      .expect(404)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).to.eql('could not find record with id in red-flags');
      })
      .end(done);
  });
});

describe('Red-flag test (Patch "/api/v1/red-flags/:id/comment")', () => {
  it(`should edit the record's comment with specified id "${testID}" from memory`, (done) => {
    const newComment = {
      comment: 'Edited comment for testing',
    };
    request(app)
      .patch(`/api/v1/red-flags/${testID}/comment`)
      .send(newComment)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body.message).to.eql('updated red-flag record\'s comment');
        expect(res.body.id).to.eql(testID);
      })
      .end(done);
  });

  it('should fail to edit the record\'s comment because of wrong data entry', (done) => {
    const newComment = {
      location: '109, 90',
    };
    request(app)
      .patch(`/api/v1/red-flags/${testID}/comment`)
      .send(newComment)
      .expect(400)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).to.eql('update data is wrong. check data');
      })
      .end(done);
  });

  it('should should not find id to edit', (done) => {
    const newComment = {
      comment: 'Edited comment for testing',
    };
    request(app)
      .patch('/api/v1/red-flags/0/comment')
      .send(newComment)
      .expect(404)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).to.eql('could not find record with id in red-flags');
      })
      .end(done);
  });
});

describe('Red-flag test (Delete "/api/v1/red-flags/:id")', () => {
  it(`should delete the record with specified id "${testID}" from memory`, (done) => {
    request(app)
      .delete(`/api/v1/red-flags/${testID}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body.message).to.eql('red-flag record has been deleted');
        expect(res.body.id).to.eql(testID);
      })
      .end(done);
  });
});
