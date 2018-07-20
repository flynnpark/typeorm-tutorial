import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Photo } from './entity/Photo';
import connectionOptions from './connectionOptions';
import { PhotoMetadata } from './entity/PhotoMetadata';

createConnection(connectionOptions)
  .then(async connection => {
    let photoRepository = connection.getRepository(Photo);
    let metadataRepository = connection.getRepository(PhotoMetadata);

    let photo = await photoRepository.findOne(1);

    let metadata = new PhotoMetadata();
    metadata.height = 640;
    metadata.width = 480;
    metadata.compressed = true;
    metadata.comment = 'cybershoot';
    metadata.orientation = 'portait';
    metadata.photo = photo;

    await metadataRepository.save(metadata);

    console.log(
      'Metadata is saved, and relation between metadata and photo is created in the database too'
    );
  })
  .catch(error => console.log(error));
