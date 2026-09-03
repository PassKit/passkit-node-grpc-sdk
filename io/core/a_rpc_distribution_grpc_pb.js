// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
var io_common_distribution_pb = require('../../io/common/distribution_pb.js');
var io_common_message_pb = require('../../io/common/message_pb.js');

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

function serialize_io_Id(arg) {
  if (!(arg instanceof io_common_common_objects_pb.Id)) {
    throw new Error('Expected argument of type io.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Id(buffer_arg) {
  return io_common_common_objects_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_Message(arg) {
  if (!(arg instanceof io_common_message_pb.Message)) {
    throw new Error('Expected argument of type io.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Message(buffer_arg) {
  return io_common_message_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
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


// The PassKit Distribution API allows you to create SmartPass links and manage the distribution of digital passes to your customers via email.
var DistributionService = exports.DistributionService = {
  // Sends a welcome email to a single recipient using a valid pass protocol (e.g., membership, coupon, ticket). Required Fields: passId or externalId, classId, protocol.
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
  // Generates and returns an encrypted SmartPass link for a member, coupon, or event ticket based on the request payload. Required Fields: passId or externalId, classId.
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
  // Returns a list of fields to be displayed on the data collection page. For the Member protocol, classId is required. Required Fields: classId (only for MEMBERSHIP protocol)
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
  // Accepts a CSV file containing user data and a project short code, processes SmartPass creation, and sends results to the user via email. Required Fields: shortCode, csv contents.
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
  // Imports and processes a formatted CSV file for a given protocol (e.g., member, coupon) and creates billable records. Required: classId, protocol, and valid csv contents.
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
  // Validates a time-based one-time password (TOTP) barcode string in the format {{payload}}||{{key}}||{{timestamp}}||{{totp}}. If valid, returns the cleaned payload without TOTP metadata. Required Fields: payload.
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
  addMessage: {
    path: '/io.Distribution/addMessage',
    requestStream: false,
    responseStream: false,
    requestType: io_common_message_pb.Message,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Message,
    requestDeserialize: deserialize_io_Message,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getMessage: {
    path: '/io.Distribution/getMessage',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_message_pb.Message,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_Message,
    responseDeserialize: deserialize_io_Message,
  },
  getMessages: {
    path: '/io.Distribution/getMessages',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: io_common_message_pb.Message,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_io_Message,
    responseDeserialize: deserialize_io_Message,
  },
  updateMessage: {
    path: '/io.Distribution/updateMessage',
    requestStream: false,
    responseStream: false,
    requestType: io_common_message_pb.Message,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Message,
    requestDeserialize: deserialize_io_Message,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  cancelMessage: {
    path: '/io.Distribution/cancelMessage',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.DistributionClient = grpc.makeGenericClientConstructor(DistributionService, 'Distribution');
