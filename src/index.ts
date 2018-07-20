import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Photo } from './entity/Photo';
import connectionOptions from './connectionOptions';

createConnection(connectionOptions)
  .then(async connection => {
    let photoRepository = connection.getRepository(Photo);

    let allPhotos = await photoRepository.find();
    console.log('All photos from the db: ', allPhotos);

    let firstPhoto = await photoRepository.findOne(1);
    console.log('First photo from the db: ', firstPhoto);

    let meAndBearsPhoto = await photoRepository.findOne({
      name: 'Me and Bears'
    });
    console.log('Me and Bears photo from the db: ', meAndBearsPhoto);

    let allViewedPhotos = await photoRepository.find({ views: 1 });
    console.log('All viewed photos: ', allViewedPhotos);

    let allPublishedPhotos = await photoRepository.find({ isPublished: true });
    console.log('All published photos: ', allPublishedPhotos);

    let [findAllPhotos, findPhotosCount] = await photoRepository.findAndCount();
    console.log('All photos: ', findAllPhotos);
    console.log('Photos count: ', findPhotosCount);

    let photoToUpdate = await photoRepository.findOne(1);
    photoToUpdate.name = 'Me, my friends and polar bears';
    await photoRepository.save(photoToUpdate);

    let modifiedPhoto = await photoRepository.findOne(1);
    console.log('Modified photo from the db: ', modifiedPhoto);

    let photoToRemove = await photoRepository.findOne(1);
    await photoRepository.remove(photoToRemove);

    let photosAfterRemove = await photoRepository.find();
    console.log('All photos from the db after remove: ', photosAfterRemove);
  })
  .catch(error => console.log(error));
