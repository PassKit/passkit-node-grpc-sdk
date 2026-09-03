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

function serialize_io_AppleCertificateRenewalAuthority(arg) {
  if (!(arg instanceof io_certificate_certificate_pb.AppleCertificateRenewalAuthority)) {
    throw new Error('Expected argument of type io.AppleCertificateRenewalAuthority');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_AppleCertificateRenewalAuthority(buffer_arg) {
  return io_certificate_certificate_pb.AppleCertificateRenewalAuthority.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_CreateAppleCertificateRenewalAuthorityRequest(arg) {
  if (!(arg instanceof io_certificate_certificate_pb.CreateAppleCertificateRenewalAuthorityRequest)) {
    throw new Error('Expected argument of type io.CreateAppleCertificateRenewalAuthorityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_CreateAppleCertificateRenewalAuthorityRequest(buffer_arg) {
  return io_certificate_certificate_pb.CreateAppleCertificateRenewalAuthorityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_DeleteAppleCertificateRenewalAuthorityResponse(arg) {
  if (!(arg instanceof io_certificate_certificate_pb.DeleteAppleCertificateRenewalAuthorityResponse)) {
    throw new Error('Expected argument of type io.DeleteAppleCertificateRenewalAuthorityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_DeleteAppleCertificateRenewalAuthorityResponse(buffer_arg) {
  return io_certificate_certificate_pb.DeleteAppleCertificateRenewalAuthorityResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_GetAppleCertificateRenewalAuthorityRequest(arg) {
  if (!(arg instanceof io_certificate_certificate_pb.GetAppleCertificateRenewalAuthorityRequest)) {
    throw new Error('Expected argument of type io.GetAppleCertificateRenewalAuthorityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_GetAppleCertificateRenewalAuthorityRequest(buffer_arg) {
  return io_certificate_certificate_pb.GetAppleCertificateRenewalAuthorityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ListAppleCertificateRenewalAuthoritiesRequest(arg) {
  if (!(arg instanceof io_certificate_certificate_pb.ListAppleCertificateRenewalAuthoritiesRequest)) {
    throw new Error('Expected argument of type io.ListAppleCertificateRenewalAuthoritiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ListAppleCertificateRenewalAuthoritiesRequest(buffer_arg) {
  return io_certificate_certificate_pb.ListAppleCertificateRenewalAuthoritiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_UpdateAppleCertificateRenewalAuthorityRequest(arg) {
  if (!(arg instanceof io_certificate_certificate_pb.UpdateAppleCertificateRenewalAuthorityRequest)) {
    throw new Error('Expected argument of type io.UpdateAppleCertificateRenewalAuthorityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_UpdateAppleCertificateRenewalAuthorityRequest(buffer_arg) {
  return io_certificate_certificate_pb.UpdateAppleCertificateRenewalAuthorityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Manage your Apple Wallet Pass Type Identifiers & Certificates
var CertificatesService = exports.CertificatesService = {
  // Retrieves the Apple pass certificate data for the provided Pass Type Identifier. Required Fields: passTypeId.
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
  // Retrieves a Certificate Signing Request (CSR) for the logged-in user. This is used to generate a new certificate on the Apple Developer portal.
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
  // Uploads a new Apple certificate for use with Wallet passes. Required Field: fileBytes.
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
  // Updates or renews an existing Apple certificate by uploading a new one. Required Fields: fileBytes.
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
  // [DEPRECATED] Returns a paginated list of Apple pass certificates for the current user. Required Fields: pagination fields.
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
  // Returns a filtered list of Apple pass certificates for the current user. Required Fields: Filters.
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
  // [DEPRECATED] Returns the count of Apple certificates for the current user based on pagination criteria. Required fields: pagination fields.
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
  // Returns the count of Apple certificates for the current user using filter criteria. Required Fields: Filters (can be empty, but must be present)
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
  // Creates an Apple certificate renewal authority for the authenticated user.
createAppleCertificateRenewalAuthority: {
    path: '/io.Certificates/createAppleCertificateRenewalAuthority',
    requestStream: false,
    responseStream: false,
    requestType: io_certificate_certificate_pb.CreateAppleCertificateRenewalAuthorityRequest,
    responseType: io_certificate_certificate_pb.AppleCertificateRenewalAuthority,
    requestSerialize: serialize_io_CreateAppleCertificateRenewalAuthorityRequest,
    requestDeserialize: deserialize_io_CreateAppleCertificateRenewalAuthorityRequest,
    responseSerialize: serialize_io_AppleCertificateRenewalAuthority,
    responseDeserialize: deserialize_io_AppleCertificateRenewalAuthority,
  },
  // Retrieves an Apple certificate renewal authority by ID.
getAppleCertificateRenewalAuthority: {
    path: '/io.Certificates/getAppleCertificateRenewalAuthority',
    requestStream: false,
    responseStream: false,
    requestType: io_certificate_certificate_pb.GetAppleCertificateRenewalAuthorityRequest,
    responseType: io_certificate_certificate_pb.AppleCertificateRenewalAuthority,
    requestSerialize: serialize_io_GetAppleCertificateRenewalAuthorityRequest,
    requestDeserialize: deserialize_io_GetAppleCertificateRenewalAuthorityRequest,
    responseSerialize: serialize_io_AppleCertificateRenewalAuthority,
    responseDeserialize: deserialize_io_AppleCertificateRenewalAuthority,
  },
  // Updates an Apple certificate renewal authority.
updateAppleCertificateRenewalAuthority: {
    path: '/io.Certificates/updateAppleCertificateRenewalAuthority',
    requestStream: false,
    responseStream: false,
    requestType: io_certificate_certificate_pb.UpdateAppleCertificateRenewalAuthorityRequest,
    responseType: io_certificate_certificate_pb.AppleCertificateRenewalAuthority,
    requestSerialize: serialize_io_UpdateAppleCertificateRenewalAuthorityRequest,
    requestDeserialize: deserialize_io_UpdateAppleCertificateRenewalAuthorityRequest,
    responseSerialize: serialize_io_AppleCertificateRenewalAuthority,
    responseDeserialize: deserialize_io_AppleCertificateRenewalAuthority,
  },
  // Deletes an Apple certificate renewal authority.
deleteAppleCertificateRenewalAuthority: {
    path: '/io.Certificates/deleteAppleCertificateRenewalAuthority',
    requestStream: false,
    responseStream: false,
    requestType: io_certificate_certificate_pb.GetAppleCertificateRenewalAuthorityRequest,
    responseType: io_certificate_certificate_pb.DeleteAppleCertificateRenewalAuthorityResponse,
    requestSerialize: serialize_io_GetAppleCertificateRenewalAuthorityRequest,
    requestDeserialize: deserialize_io_GetAppleCertificateRenewalAuthorityRequest,
    responseSerialize: serialize_io_DeleteAppleCertificateRenewalAuthorityResponse,
    responseDeserialize: deserialize_io_DeleteAppleCertificateRenewalAuthorityResponse,
  },
  // Lists Apple certificate renewal authorities visible to the authenticated user.
listAppleCertificateRenewalAuthorities: {
    path: '/io.Certificates/listAppleCertificateRenewalAuthorities',
    requestStream: false,
    responseStream: true,
    requestType: io_certificate_certificate_pb.ListAppleCertificateRenewalAuthoritiesRequest,
    responseType: io_certificate_certificate_pb.AppleCertificateRenewalAuthority,
    requestSerialize: serialize_io_ListAppleCertificateRenewalAuthoritiesRequest,
    requestDeserialize: deserialize_io_ListAppleCertificateRenewalAuthoritiesRequest,
    responseSerialize: serialize_io_AppleCertificateRenewalAuthority,
    responseDeserialize: deserialize_io_AppleCertificateRenewalAuthority,
  },
  // Sends NFC signing credentials for an NFC-enabled Apple certificate to the user's registered email address. Required Fields: certificateId, user email must be associated with the cert.
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

exports.CertificatesClient = grpc.makeGenericClientConstructor(CertificatesService, 'Certificates');
