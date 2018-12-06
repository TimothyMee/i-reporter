import request from 'supertest';
import expect from 'expect.js';

import app from '../server/index';

let testID = 1;

describe('Intervention test (Post "/api/v1/interventions")', () => {
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
      .post('/api/v1/interventions')
      .send(testText)
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.message).to.eql('Created intervention record');
        expect(res.status).to.eql(201);
        testID = res.body.id;
        done();
      });
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
      .post('/api/v1/interventions')
      .send(testText)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const error = JSON.parse(res.text);
        expect(error.error).to.eql('"createdBy" must be a number');
        expect(res.status).to.eql(400);
        done();
      });
  });
});

describe('Intervention test (Get "/api/v1/interventions")', () => {
  it('should fetch all intervention records in memory', (done) => {
    request(app)
      .get('/api/v1/interventions')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        expect(res.status).to.eql(200);
        done();
      });
  });
});

describe('Intervention test (Get "/api/v1/interventions/:id")', () => {
  it(`should fetch an intervention record with specified id "${testID}" from memory`, (done) => {
    request(app)
      .get(`/api/v1/interventions/${testID}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.eql(200);
        done();
      });
  });
});

describe('Intervention test (Patch "/api/v1/interventions/:id/location")', () => {
  it(`should edit the record's location with specified id "${testID}" from memory`, (done) => {
    const newLocation = {
      location: '190,90',
    };
    request(app)
      .patch(`/api/v1/interventions/${testID}/location`)
      .send(newLocation)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.message).to.eql('updated intervention record\'s location');
        expect(res.body.id).to.eql(testID);
        expect(res.status).to.eql(200);
        done();
      });
  });

  it('should fail to edit the record\'s location because of wrong data entry', (done) => {
    const newComment = {
      comment: 'Edited comment for testing',
    };
    request(app)
      .patch(`/api/v1/interventions/${testID}/location`)
      .send(newComment)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const error = JSON.parse(res.text);
        expect(error.error).to.eql('update data is wrong. check data');
        expect(res.status).to.eql(400);
        done();
      });
  });

  it('should should not find id to edit', (done) => {
    const newComment = {
      comment: 'Edited comment for testing',
    };
    request(app)
      .patch('/api/v1/interventions/0/location')
      .send(newComment)
      .expect(404)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const error = JSON.parse(res.text);
        expect(error.error).to.eql('could not find record with id in interventions');
        expect(res.status).to.eql(404);
        done();
      });
  });
});

describe('Intervention test (Patch "/api/v1/interventions/:id/comment")', () => {
  it(`should edit the record's comment with specified id "${testID}" from memory`, (done) => {
    const newComment = {
      comment: 'Edited comment for testing',
    };
    request(app)
      .patch(`/api/v1/interventions/${testID}/comment`)
      .send(newComment)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.message).to.eql('updated intervention record\'s comment');
        expect(res.body.id).to.eql(testID);
        expect(res.status).to.eql(200);
        done();
      });
  });

  it('should fail to edit the record\'s comment because of wrong data entry', (done) => {
    const newComment = {
      location: '109, 90',
    };
    request(app)
      .patch(`/api/v1/interventions/${testID}/comment`)
      .send(newComment)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const error = JSON.parse(res.text);
        expect(error.error).to.eql('update data is wrong. check data');
        expect(res.status).to.eql(400);
        done();
      });
  });

  it('should should not find id to edit', (done) => {
    const newComment = {
      comment: 'Edited comment for testing',
    };
    request(app)
      .patch('/api/v1/interventions/0/comment')
      .send(newComment)
      .expect(404)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const error = JSON.parse(res.text);
        expect(error.error).to.eql('could not find record with id in interventions');
        expect(res.status).to.eql(404);
        done();
      });
  });
});

describe('Intervention test (Delete "/api/v1/interventions/:id")', () => {
  it(`should delete the record with specified id "${testID}" from memory`, (done) => {
    request(app)
      .delete(`/api/v1/interventions/${testID}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.message).to.eql('intervention record has been deleted');
        expect(res.body.id).to.eql(testID);
        expect(res.status).to.eql(200);
        done();
      });
  });
});
