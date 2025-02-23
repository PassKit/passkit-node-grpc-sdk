// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// This protocol is suit for cases where the business logic is handled elsewhere, and the purpose is purely to issue and
// update content for Apple Wallet and Google Pay.
'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
var io_raw_project_pb = require('../../io/raw/project_pb.js');
var io_raw_pass_pb = require('../../io/raw/pass_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_raw_ListPassesByPassProjectRequest(arg) {
  if (!(arg instanceof io_raw_pass_pb.ListPassesByPassProjectRequest)) {
    throw new Error('Expected argument of type raw.ListPassesByPassProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_raw_ListPassesByPassProjectRequest(buffer_arg) {
  return io_raw_pass_pb.ListPassesByPassProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_raw_ListPassesByPassTemplateRequest(arg) {
  if (!(arg instanceof io_raw_pass_pb.ListPassesByPassTemplateRequest)) {
    throw new Error('Expected argument of type raw.ListPassesByPassTemplateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_raw_ListPassesByPassTemplateRequest(buffer_arg) {
  return io_raw_pass_pb.ListPassesByPassTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_raw_Pass(arg) {
  if (!(arg instanceof io_raw_pass_pb.Pass)) {
    throw new Error('Expected argument of type raw.Pass');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_raw_Pass(buffer_arg) {
  return io_raw_pass_pb.Pass.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_raw_PassProject(arg) {
  if (!(arg instanceof io_raw_project_pb.PassProject)) {
    throw new Error('Expected argument of type raw.PassProject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_raw_PassProject(buffer_arg) {
  return io_raw_project_pb.PassProject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_raw_PassProjectCopyRequest(arg) {
  if (!(arg instanceof io_raw_project_pb.PassProjectCopyRequest)) {
    throw new Error('Expected argument of type raw.PassProjectCopyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_raw_PassProjectCopyRequest(buffer_arg) {
  return io_raw_project_pb.PassProjectCopyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_raw_PassRecordByExternalIdRequest(arg) {
  if (!(arg instanceof io_raw_pass_pb.PassRecordByExternalIdRequest)) {
    throw new Error('Expected argument of type raw.PassRecordByExternalIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_raw_PassRecordByExternalIdRequest(buffer_arg) {
  return io_raw_pass_pb.PassRecordByExternalIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var RawService = exports.RawService = {
  createPassProject: {
    path: '/raw.Raw/createPassProject',
    requestStream: false,
    responseStream: false,
    requestType: io_raw_project_pb.PassProject,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_raw_PassProject,
    requestDeserialize: deserialize_raw_PassProject,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updatePassProject: {
    path: '/raw.Raw/updatePassProject',
    requestStream: false,
    responseStream: false,
    requestType: io_raw_project_pb.PassProject,
    responseType: io_raw_project_pb.PassProject,
    requestSerialize: serialize_raw_PassProject,
    requestDeserialize: deserialize_raw_PassProject,
    responseSerialize: serialize_raw_PassProject,
    responseDeserialize: deserialize_raw_PassProject,
  },
  getPassProject: {
    path: '/raw.Raw/getPassProject',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_raw_project_pb.PassProject,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_raw_PassProject,
    responseDeserialize: deserialize_raw_PassProject,
  },
  copyPassProject: {
    path: '/raw.Raw/copyPassProject',
    requestStream: false,
    responseStream: false,
    requestType: io_raw_project_pb.PassProjectCopyRequest,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_raw_PassProjectCopyRequest,
    requestDeserialize: deserialize_raw_PassProjectCopyRequest,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  deletePassProject: {
    path: '/raw.Raw/deletePassProject',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  createPass: {
    path: '/raw.Raw/createPass',
    requestStream: false,
    responseStream: false,
    requestType: io_raw_pass_pb.Pass,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_raw_Pass,
    requestDeserialize: deserialize_raw_Pass,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updatePass: {
    path: '/raw.Raw/updatePass',
    requestStream: false,
    responseStream: false,
    requestType: io_raw_pass_pb.Pass,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_raw_Pass,
    requestDeserialize: deserialize_raw_Pass,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  streamPassUpdates: {
    path: '/raw.Raw/streamPassUpdates',
    requestStream: true,
    responseStream: true,
    requestType: io_raw_pass_pb.Pass,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_raw_Pass,
    requestDeserialize: deserialize_raw_Pass,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  getPassById: {
    path: '/raw.Raw/getPassById',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_raw_pass_pb.Pass,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_raw_Pass,
    responseDeserialize: deserialize_raw_Pass,
  },
  getPassByExternalId: {
    path: '/raw.Raw/getPassByExternalId',
    requestStream: false,
    responseStream: false,
    requestType: io_raw_pass_pb.PassRecordByExternalIdRequest,
    responseType: io_raw_pass_pb.Pass,
    requestSerialize: serialize_raw_PassRecordByExternalIdRequest,
    requestDeserialize: deserialize_raw_PassRecordByExternalIdRequest,
    responseSerialize: serialize_raw_Pass,
    responseDeserialize: deserialize_raw_Pass,
  },
  deletePass: {
    path: '/raw.Raw/deletePass',
    requestStream: false,
    responseStream: false,
    requestType: io_raw_pass_pb.Pass,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_raw_Pass,
    requestDeserialize: deserialize_raw_Pass,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listPassesByPassProject: {
    path: '/raw.Raw/listPassesByPassProject',
    requestStream: false,
    responseStream: true,
    requestType: io_raw_pass_pb.ListPassesByPassProjectRequest,
    responseType: io_raw_pass_pb.Pass,
    requestSerialize: serialize_raw_ListPassesByPassProjectRequest,
    requestDeserialize: deserialize_raw_ListPassesByPassProjectRequest,
    responseSerialize: serialize_raw_Pass,
    responseDeserialize: deserialize_raw_Pass,
  },
  listPassesByPassTemplate: {
    path: '/raw.Raw/listPassesByPassTemplate',
    requestStream: false,
    responseStream: true,
    requestType: io_raw_pass_pb.ListPassesByPassTemplateRequest,
    responseType: io_raw_pass_pb.Pass,
    requestSerialize: serialize_raw_ListPassesByPassTemplateRequest,
    requestDeserialize: deserialize_raw_ListPassesByPassTemplateRequest,
    responseSerialize: serialize_raw_Pass,
    responseDeserialize: deserialize_raw_Pass,
  },
};

exports.RawClient = grpc.makeGenericClientConstructor(RawService, 'Raw');
