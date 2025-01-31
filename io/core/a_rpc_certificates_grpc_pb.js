// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
var io_certificate_certificate_pb = require('../../io/certificate/certificate_pb.js');
var io_common_pagination_pb = require('../../io/common/pagination_pb.js');
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

function serialize_io_CertificateData(arg) {
  if (!(arg instanceof io_certificate_certificate_pb.CertificateData)) {
    throw new Error('Expected argument of type io.CertificateData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_CertificateData(buffer_arg) {
  return io_certificate_certificate_pb.CertificateData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_CertificateSigningRequest(arg) {
  if (!(arg instanceof io_certificate_certificate_pb.CertificateSigningRequest)) {
    throw new Error('Expected argument of type io.CertificateSigningRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_CertificateSigningRequest(buffer_arg) {
  return io_certificate_certificate_pb.CertificateSigningRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_FileBytes(arg) {
  if (!(arg instanceof io_common_common_objects_pb.FileBytes)) {
    throw new Error('Expected argument of type io.FileBytes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_FileBytes(buffer_arg) {
  return io_common_common_objects_pb.FileBytes.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_NFCSigningCredentialsRequest(arg) {
  if (!(arg instanceof io_certificate_certificate_pb.NFCSigningCredentialsRequest)) {
    throw new Error('Expected argument of type io.NFCSigningCredentialsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_NFCSigningCredentialsRequest(buffer_arg) {
  return io_certificate_certificate_pb.NFCSigningCredentialsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_PassTypeIdentifier(arg) {
  if (!(arg instanceof io_certificate_certificate_pb.PassTypeIdentifier)) {
    throw new Error('Expected argument of type io.PassTypeIdentifier');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_PassTypeIdentifier(buffer_arg) {
  return io_certificate_certificate_pb.PassTypeIdentifier.deserializeBinary(new Uint8Array(buffer_arg));
}


var CertificatesService = exports.CertificatesService = {
  getAppleCertificateData: {
    path: '/io.Certificates/getAppleCertificateData',
    requestStream: false,
    responseStream: false,
    requestType: io_certificate_certificate_pb.PassTypeIdentifier,
    responseType: io_certificate_certificate_pb.CertificateData,
    requestSerialize: serialize_io_PassTypeIdentifier,
    requestDeserialize: deserialize_io_PassTypeIdentifier,
    responseSerialize: serialize_io_CertificateData,
    responseDeserialize: deserialize_io_CertificateData,
  },
  getCertificateSigningRequest: {
    path: '/io.Certificates/getCertificateSigningRequest',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: io_certificate_certificate_pb.CertificateSigningRequest,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_io_CertificateSigningRequest,
    responseDeserialize: deserialize_io_CertificateSigningRequest,
  },
  addAppleCertificate: {
    path: '/io.Certificates/addAppleCertificate',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.FileBytes,
    responseType: io_certificate_certificate_pb.CertificateData,
    requestSerialize: serialize_io_FileBytes,
    requestDeserialize: deserialize_io_FileBytes,
    responseSerialize: serialize_io_CertificateData,
    responseDeserialize: deserialize_io_CertificateData,
  },
  updateAppleCertificate: {
    path: '/io.Certificates/updateAppleCertificate',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.FileBytes,
    responseType: io_certificate_certificate_pb.CertificateData,
    requestSerialize: serialize_io_FileBytes,
    requestDeserialize: deserialize_io_FileBytes,
    responseSerialize: serialize_io_CertificateData,
    responseDeserialize: deserialize_io_CertificateData,
  },
  listAppleCertificatesDeprecated: {
    path: '/io.Certificates/listAppleCertificatesDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_certificate_certificate_pb.CertificateData,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_CertificateData,
    responseDeserialize: deserialize_io_CertificateData,
  },
  listAppleCertificates: {
    path: '/io.Certificates/listAppleCertificates',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_certificate_certificate_pb.CertificateData,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_CertificateData,
    responseDeserialize: deserialize_io_CertificateData,
  },
  countAppleCertificatesDeprecated: {
    path: '/io.Certificates/countAppleCertificatesDeprecated',
    requestStream: false,
    responseStream: false,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  countAppleCertificates: {
    path: '/io.Certificates/countAppleCertificates',
    requestStream: false,
    responseStream: false,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  sendNFCSigningCredentials: {
    path: '/io.Certificates/sendNFCSigningCredentials',
    requestStream: false,
    responseStream: false,
    requestType: io_certificate_certificate_pb.NFCSigningCredentialsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_NFCSigningCredentialsRequest,
    requestDeserialize: deserialize_io_NFCSigningCredentialsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.CertificatesClient = grpc.makeGenericClientConstructor(CertificatesService);
