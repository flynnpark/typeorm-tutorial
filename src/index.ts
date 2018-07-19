import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Photo } from './entity/Photo'
import connectionOptions from './connectionOptions';

createConnection(connectionOptions)
  .then(async connection => {
    let photo = new Photo();
    photo.name = 'Me and Bears';
    photo.description = 'I am near polar bears';
    photo.filename = 'photo-with-bears.jpg';
    photo.views = 1;
    photo.isPublished = true;

    return connection.manager.save(photo).then(photo => { console.log('Photo has been saved. Photo id is', photo.id )})
  })
  .catch(error => console.log(error));
