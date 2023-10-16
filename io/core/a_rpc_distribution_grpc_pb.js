// GENERATED CODE -- DO NOT EDIT!

'use strict';
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
var io_common_distribution_pb = require('../../io/common/distribution_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ClassObjectInput(arg) {
  if (!(arg instanceof io_common_common_objects_pb.ClassObjectInput)) {
    throw new Error('Expected argument of type io.ClassObjectInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ClassObjectInput(buffer_arg) {
  return io_common_common_objects_pb.ClassObjectInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_DataCollectionFields(arg) {
  if (!(arg instanceof io_common_distribution_pb.DataCollectionFields)) {
    throw new Error('Expected argument of type io.DataCollectionFields');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_DataCollectionFields(buffer_arg) {
  return io_common_distribution_pb.DataCollectionFields.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_EmailDistributionRequest(arg) {
  if (!(arg instanceof io_common_distribution_pb.EmailDistributionRequest)) {
    throw new Error('Expected argument of type io.EmailDistributionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_EmailDistributionRequest(buffer_arg) {
  return io_common_distribution_pb.EmailDistributionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ImportProtocolRequest(arg) {
  if (!(arg instanceof io_common_distribution_pb.ImportProtocolRequest)) {
    throw new Error('Expected argument of type io.ImportProtocolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ImportProtocolRequest(buffer_arg) {
  return io_common_distribution_pb.ImportProtocolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Payload(arg) {
  if (!(arg instanceof io_common_common_objects_pb.Payload)) {
    throw new Error('Expected argument of type io.Payload');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Payload(buffer_arg) {
  return io_common_common_objects_pb.Payload.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_SmartPassCsvUploadRequest(arg) {
  if (!(arg instanceof io_common_distribution_pb.SmartPassCsvUploadRequest)) {
    throw new Error('Expected argument of type io.SmartPassCsvUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_SmartPassCsvUploadRequest(buffer_arg) {
  return io_common_distribution_pb.SmartPassCsvUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_SmartPassLinkRequest(arg) {
  if (!(arg instanceof io_common_distribution_pb.SmartPassLinkRequest)) {
    throw new Error('Expected argument of type io.SmartPassLinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_SmartPassLinkRequest(buffer_arg) {
  return io_common_distribution_pb.SmartPassLinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var DistributionService = exports['io.Distribution'] = {
  sendWelcomeEmail: {
    path: '/io.Distribution/sendWelcomeEmail',
    requestStream: false,
    responseStream: false,
    requestType: io_common_distribution_pb.EmailDistributionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_EmailDistributionRequest,
    requestDeserialize: deserialize_io_EmailDistributionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getSmartPassLink: {
    path: '/io.Distribution/getSmartPassLink',
    requestStream: false,
    responseStream: false,
    requestType: io_common_distribution_pb.SmartPassLinkRequest,
    responseType: io_common_common_objects_pb.Url,
    requestSerialize: serialize_io_SmartPassLinkRequest,
    requestDeserialize: deserialize_io_SmartPassLinkRequest,
    responseSerialize: serialize_io_Url,
    responseDeserialize: deserialize_io_Url,
  },
  getDataCollectionPageFields: {
    path: '/io.Distribution/getDataCollectionPageFields',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.ClassObjectInput,
    responseType: io_common_distribution_pb.DataCollectionFields,
    requestSerialize: serialize_io_ClassObjectInput,
    requestDeserialize: deserialize_io_ClassObjectInput,
    responseSerialize: serialize_io_DataCollectionFields,
    responseDeserialize: deserialize_io_DataCollectionFields,
  },
  uploadSmartPassCsv: {
    path: '/io.Distribution/uploadSmartPassCsv',
    requestStream: false,
    responseStream: false,
    requestType: io_common_distribution_pb.SmartPassCsvUploadRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_SmartPassCsvUploadRequest,
    requestDeserialize: deserialize_io_SmartPassCsvUploadRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  importProtocolCsv: {
    path: '/io.Distribution/importProtocolCsv',
    requestStream: false,
    responseStream: false,
    requestType: io_common_distribution_pb.ImportProtocolRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_ImportProtocolRequest,
    requestDeserialize: deserialize_io_ImportProtocolRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  validateBarcode: {
    path: '/io.Distribution/validateBarcode',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Payload,
    responseType: io_common_common_objects_pb.Payload,
    requestSerialize: serialize_io_Payload,
    requestDeserialize: deserialize_io_Payload,
    responseSerialize: serialize_io_Payload,
    responseDeserialize: deserialize_io_Payload,
  },
};

