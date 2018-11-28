const expect = require('expect.js');
const request = require('supertest');
const { app } = require('../index');

let testID = 1;

describe('Intervention test (Post "/interventions")', () => {
  it('should save intervention into the memory and respond appropriately', (done) => {
    const testText = {
      createdBy: 1,
      type: 'intervention',
      name: 'silly Tega',
      location: '1298,20',
      status: 'pending',
      comment: "this is a shade's data",
      images: 'tegaa.png',
      videos: 'tegaa.png',
    };

    request(app)
      .post('/interventions')
      .send(testText)
      .expect(201)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body.message).to.eql('Created intervention record');
        testID = res.body.id;
      })
      .end(done);
  });

  it('should fail to save intervention into the memory because of wrong data and respond appropriately', (done) => {
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
      .post('/interventions')
      .send(testText)
      .expect(400)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).to.eql('"createdBy" must be a number');
      })
      .end(done);
  });
});

describe('Intervention test (Get "/interventions")', () => {
  it('should fetch all intervention records in memory', (done) => {
    request(app)
      .get('/interventions')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).to.be.an('array');
      })
      .end(done);
  });
});

describe('Intervention test (Get "/interventions/:id")', () => {
  it(`should fetch an intervention record with specified id "${testID}" from memory`, (done) => {
    request(app)
      .get(`/interventions/${testID}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).to.be.an('object');
      })
      .end(done);
  });
});

describe('Intervention test (Patch "/interventions/:id/location")', () => {
  it(`should edit the record\'s location with specified id "${testID}" from memory`, (done) => {
    const newLocation = {
      location: '190,90',
    };
    request(app)
      .patch(`/interventions/${testID}/location`)
      .send(newLocation)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body.message).to.eql('updated intervention record\'s location');
        expect(res.body.id).to.eql(testID);
      })
      .end(done);
  });

  it('should fail to edit the record\'s location because of wrong data entry', (done) => {
    const newComment = {
      comment: 'Edited comment for testing',
    };
    request(app)
      .patch(`/interventions/${testID}/location`)
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
      .patch('/interventions/0/location')
      .send(newComment)
      .expect(404)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).to.eql('could not find record with id in interventions');
      })
      .end(done);
  });
});

describe('Intervention test (Patch "/interventions/:id/comment")', () => {
  it(`should edit the record\'s comment with specified id "${testID}" from memory`, (done) => {
    const newComment = {
      comment: 'Edited comment for testing',
    };
    request(app)
      .patch(`/interventions/${testID}/comment`)
      .send(newComment)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body.message).to.eql('updated intervention record\'s comment');
        expect(res.body.id).to.eql(testID);
      })
      .end(done);
  });

  it('should fail to edit the record\'s comment because of wrong data entry', (done) => {
    const newComment = {
      location: '109, 90',
    };
    request(app)
      .patch(`/interventions/${testID}/comment`)
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
      .patch('/interventions/0/comment')
      .send(newComment)
      .expect(404)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).to.eql('could not find record with id in interventions');
      })
      .end(done);
  });
});

describe('Intervention test (Delete "/interventions/:id")', () => {
  it(`should delete the record with specified id "${testID}" from memory`, (done) => {
    request(app)
      .delete(`/interventions/${testID}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body.message).to.eql('intervention record has been deleted');
        expect(res.body.id).to.eql(testID);
      })
      .end(done);
  });
});
