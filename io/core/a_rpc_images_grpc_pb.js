// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
var io_common_pagination_pb = require('../../io/common/pagination_pb.js');
var io_image_image_pb = require('../../io/image/image_pb.js');
var io_common_filter_pb = require('../../io/common/filter_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Count(arg) {
  if (!(arg instanceof io_common_common_objects_pb.Count)) {
    throw new Error('Expected argument of type io.Count');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Count(buffer_arg) {
  return io_common_common_objects_pb.Count.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_CreateImageInput(arg) {
  if (!(arg instanceof io_image_image_pb.CreateImageInput)) {
    throw new Error('Expected argument of type io.CreateImageInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_CreateImageInput(buffer_arg) {
  return io_image_image_pb.CreateImageInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Filters(arg) {
  if (!(arg instanceof io_common_filter_pb.Filters)) {
    throw new Error('Expected argument of type io.Filters');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Filters(buffer_arg) {
  return io_common_filter_pb.Filters.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Id(arg) {
  if (!(arg instanceof io_common_common_objects_pb.Id)) {
    throw new Error('Expected argument of type io.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Id(buffer_arg) {
  return io_common_common_objects_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ImageBundle(arg) {
  if (!(arg instanceof io_image_image_pb.ImageBundle)) {
    throw new Error('Expected argument of type io.ImageBundle');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ImageBundle(buffer_arg) {
  return io_image_image_pb.ImageBundle.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ImageIds(arg) {
  if (!(arg instanceof io_image_image_pb.ImageIds)) {
    throw new Error('Expected argument of type io.ImageIds');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ImageIds(buffer_arg) {
  return io_image_image_pb.ImageIds.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ImageRecord(arg) {
  if (!(arg instanceof io_image_image_pb.ImageRecord)) {
    throw new Error('Expected argument of type io.ImageRecord');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ImageRecord(buffer_arg) {
  return io_image_image_pb.ImageRecord.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_LocalizedImageInput(arg) {
  if (!(arg instanceof io_image_image_pb.LocalizedImageInput)) {
    throw new Error('Expected argument of type io.LocalizedImageInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_LocalizedImageInput(buffer_arg) {
  return io_image_image_pb.LocalizedImageInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Pagination(arg) {
  if (!(arg instanceof io_common_pagination_pb.Pagination)) {
    throw new Error('Expected argument of type io.Pagination');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Pagination(buffer_arg) {
  return io_common_pagination_pb.Pagination.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ProfileImageInput(arg) {
  if (!(arg instanceof io_image_image_pb.ProfileImageInput)) {
    throw new Error('Expected argument of type io.ProfileImageInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ProfileImageInput(buffer_arg) {
  return io_image_image_pb.ProfileImageInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_StampImageConfig(arg) {
  if (!(arg instanceof io_image_image_pb.StampImageConfig)) {
    throw new Error('Expected argument of type io.StampImageConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_StampImageConfig(buffer_arg) {
  return io_image_image_pb.StampImageConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_StampImagePreview(arg) {
  if (!(arg instanceof io_image_image_pb.StampImagePreview)) {
    throw new Error('Expected argument of type io.StampImagePreview');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_StampImagePreview(buffer_arg) {
  return io_image_image_pb.StampImagePreview.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_StampImagePreviewRequest(arg) {
  if (!(arg instanceof io_image_image_pb.StampImagePreviewRequest)) {
    throw new Error('Expected argument of type io.StampImagePreviewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_StampImagePreviewRequest(buffer_arg) {
  return io_image_image_pb.StampImagePreviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_StampImageRequest(arg) {
  if (!(arg instanceof io_image_image_pb.StampImageRequest)) {
    throw new Error('Expected argument of type io.StampImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_StampImageRequest(buffer_arg) {
  return io_image_image_pb.StampImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_UpdateImageInput(arg) {
  if (!(arg instanceof io_image_image_pb.UpdateImageInput)) {
    throw new Error('Expected argument of type io.UpdateImageInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_UpdateImageInput(buffer_arg) {
  return io_image_image_pb.UpdateImageInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Url(arg) {
  if (!(arg instanceof io_common_common_objects_pb.Url)) {
    throw new Error('Expected argument of type io.Url');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Url(buffer_arg) {
  return io_common_common_objects_pb.Url.deserializeBinary(new Uint8Array(buffer_arg));
}


// The PassKit Images API lets you manage your image assets for Apple Wallet, Google Wallet and the data collection pages.
var ImagesService = exports.ImagesService = {
  // Set the profile image for the logged in user. Required Fields: imageData.
setProfileImage: {
    path: '/io.Images/setProfileImage',
    requestStream: false,
    responseStream: false,
    requestType: io_image_image_pb.ProfileImageInput,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_ProfileImageInput,
    requestDeserialize: deserialize_io_ProfileImageInput,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Get the profile image URL for the logged in user.
getProfileImage: {
    path: '/io.Images/getProfileImage',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: io_common_common_objects_pb.Url,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_io_Url,
    responseDeserialize: deserialize_io_Url,
  },
  // Creates one or more images. Image data is provided in base64. Required Fields: name, imageData.
createImages: {
    path: '/io.Images/createImages',
    requestStream: false,
    responseStream: false,
    requestType: io_image_image_pb.CreateImageInput,
    responseType: io_image_image_pb.ImageIds,
    requestSerialize: serialize_io_CreateImageInput,
    requestDeserialize: deserialize_io_CreateImageInput,
    responseSerialize: serialize_io_ImageIds,
    responseDeserialize: deserialize_io_ImageIds,
  },
  // Updates an image record's metadata. Required Fields: id.
updateImage: {
    path: '/io.Images/updateImage',
    requestStream: false,
    responseStream: false,
    requestType: io_image_image_pb.UpdateImageInput,
    responseType: io_image_image_pb.ImageRecord,
    requestSerialize: serialize_io_UpdateImageInput,
    requestDeserialize: deserialize_io_UpdateImageInput,
    responseSerialize: serialize_io_ImageRecord,
    responseDeserialize: deserialize_io_ImageRecord,
  },
  // Retrieves an image URL by its ID. Required Fields: id.
getImageURL: {
    path: '/io.Images/getImageURL',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_common_objects_pb.Url,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_Url,
    responseDeserialize: deserialize_io_Url,
  },
  // Retrieves a stamp image URL with the supplied stamp status. Required Fields: id and status.
getStampImageURL: {
    path: '/io.Images/getStampImageURL',
    requestStream: false,
    responseStream: false,
    requestType: io_image_image_pb.StampImageRequest,
    responseType: io_common_common_objects_pb.Url,
    requestSerialize: serialize_io_StampImageRequest,
    requestDeserialize: deserialize_io_StampImageRequest,
    responseSerialize: serialize_io_Url,
    responseDeserialize: deserialize_io_Url,
  },
  // Retrieves the configuration of a stamp image. Required Fields: id.
getStampImageConfig: {
    path: '/io.Images/getStampImageConfig',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_image_image_pb.StampImageConfig,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_StampImageConfig,
    responseDeserialize: deserialize_io_StampImageConfig,
  },
  // Updates a stamp image configuration. Required Fields: id and config fields.
updateStampImageConfig: {
    path: '/io.Images/updateStampImageConfig',
    requestStream: false,
    responseStream: false,
    requestType: io_image_image_pb.StampImageConfig,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_StampImageConfig,
    requestDeserialize: deserialize_io_StampImageConfig,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  // Gets a preview image of the provided stamp image configuration. Required Fields: stampImageConfig and status.
getStampImagePreview: {
    path: '/io.Images/getStampImagePreview',
    requestStream: false,
    responseStream: false,
    requestType: io_image_image_pb.StampImagePreviewRequest,
    responseType: io_image_image_pb.StampImagePreview,
    requestSerialize: serialize_io_StampImagePreviewRequest,
    requestDeserialize: deserialize_io_StampImagePreviewRequest,
    responseSerialize: serialize_io_StampImagePreview,
    responseDeserialize: deserialize_io_StampImagePreview,
  },
  // Retrieves a localized image URL for a specific language. Required Fields: iD and languageCode.
getLocalizedImageURL: {
    path: '/io.Images/getLocalizedImageURL',
    requestStream: false,
    responseStream: false,
    requestType: io_image_image_pb.LocalizedImageInput,
    responseType: io_common_common_objects_pb.Url,
    requestSerialize: serialize_io_LocalizedImageInput,
    requestDeserialize: deserialize_io_LocalizedImageInput,
    responseSerialize: serialize_io_Url,
    responseDeserialize: deserialize_io_Url,
  },
  // Retrieves a profile image URL by a specific ID. Required Fields: id.
getProfileImageById: {
    path: '/io.Images/getProfileImageById',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_common_objects_pb.Url,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_Url,
    responseDeserialize: deserialize_io_Url,
  },
  // Retrieves an image bundle (ZIP) containing all images for the given ID. Required Fields: id.
getImageBundle: {
    path: '/io.Images/getImageBundle',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_image_image_pb.ImageBundle,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_ImageBundle,
    responseDeserialize: deserialize_io_ImageBundle,
  },
  // Retrieves metadata for an image record. Required: id.
getImageData: {
    path: '/io.Images/getImageData',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_image_image_pb.ImageRecord,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_ImageRecord,
    responseDeserialize: deserialize_io_ImageRecord,
  },
  // Deletes an image record. Required: id.
deleteImage: {
    path: '/io.Images/deleteImage',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Deletes a localized version of an image. Required Fields: id and language code.
deleteLocalizedImage: {
    path: '/io.Images/deleteLocalizedImage',
    requestStream: false,
    responseStream: false,
    requestType: io_image_image_pb.LocalizedImageInput,
    responseType: io_image_image_pb.ImageRecord,
    requestSerialize: serialize_io_LocalizedImageInput,
    requestDeserialize: deserialize_io_LocalizedImageInput,
    responseSerialize: serialize_io_ImageRecord,
    responseDeserialize: deserialize_io_ImageRecord,
  },
  // [DEPRECATED] Retrieves all user-owned images using pagination.
listImagesForUserDeprecated: {
    path: '/io.Images/listImagesForUserDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_image_image_pb.ImageRecord,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_ImageRecord,
    responseDeserialize: deserialize_io_ImageRecord,
  },
  // Retrieves all images stored under the user account using filters. Required Fields: filters.
listImagesForUser: {
    path: '/io.Images/listImagesForUser',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_image_image_pb.ImageRecord,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_ImageRecord,
    responseDeserialize: deserialize_io_ImageRecord,
  },
  // [DEPRECATED] Retrieves all images available to the company.
listImagesDeprecated: {
    path: '/io.Images/listImagesDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_image_image_pb.ImageRecord,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_ImageRecord,
    responseDeserialize: deserialize_io_ImageRecord,
  },
  // Retrieves all images stored under the company using filters. Required Fields: filters.
listImages: {
    path: '/io.Images/listImages',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_image_image_pb.ImageRecord,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_ImageRecord,
    responseDeserialize: deserialize_io_ImageRecord,
  },
  // [DEPRECATED] Returns the count of all images available to the user.
countImagesDeprecated: {
    path: '/io.Images/countImagesDeprecated',
    requestStream: false,
    responseStream: false,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  // Returns the count of all images available to the user using filters.
countImages: {
    path: '/io.Images/countImages',
    requestStream: false,
    responseStream: false,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  // [DEPRECATED] Returns the count of images stored under the user's account.
countImagesForUserDeprecated: {
    path: '/io.Images/countImagesForUserDeprecated',
    requestStream: false,
    responseStream: false,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  // Returns the count of images stored under the user's account using filters.
countImagesForUser: {
    path: '/io.Images/countImagesForUser',
    requestStream: false,
    responseStream: false,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
};

exports.ImagesClient = grpc.makeGenericClientConstructor(ImagesService, 'Images');
