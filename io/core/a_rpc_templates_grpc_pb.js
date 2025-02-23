// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
var io_common_template_pb = require('../../io/common/template_pb.js');
var io_common_proximity_pb = require('../../io/common/proximity_pb.js');
var io_common_links_pb = require('../../io/common/links_pb.js');
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

function serialize_io_Beacon(arg) {
  if (!(arg instanceof io_common_proximity_pb.Beacon)) {
    throw new Error('Expected argument of type io.Beacon');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Beacon(buffer_arg) {
  return io_common_proximity_pb.Beacon.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_CopyObjectInput(arg) {
  if (!(arg instanceof io_common_template_pb.CopyObjectInput)) {
    throw new Error('Expected argument of type io.CopyObjectInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_CopyObjectInput(buffer_arg) {
  return io_common_template_pb.CopyObjectInput.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_DefaultTemplateRequest(arg) {
  if (!(arg instanceof io_common_template_pb.DefaultTemplateRequest)) {
    throw new Error('Expected argument of type io.DefaultTemplateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_DefaultTemplateRequest(buffer_arg) {
  return io_common_template_pb.DefaultTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_GPSLocation(arg) {
  if (!(arg instanceof io_common_proximity_pb.GPSLocation)) {
    throw new Error('Expected argument of type io.GPSLocation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_GPSLocation(buffer_arg) {
  return io_common_proximity_pb.GPSLocation.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_Link(arg) {
  if (!(arg instanceof io_common_links_pb.Link)) {
    throw new Error('Expected argument of type io.Link');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Link(buffer_arg) {
  return io_common_links_pb.Link.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_PassTemplate(arg) {
  if (!(arg instanceof io_common_template_pb.PassTemplate)) {
    throw new Error('Expected argument of type io.PassTemplate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_PassTemplate(buffer_arg) {
  return io_common_template_pb.PassTemplate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_PassTemplateResponse(arg) {
  if (!(arg instanceof io_common_template_pb.PassTemplateResponse)) {
    throw new Error('Expected argument of type io.PassTemplateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_PassTemplateResponse(buffer_arg) {
  return io_common_template_pb.PassTemplateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TemplatesService = exports.TemplatesService = {
  createTemplate: {
    path: '/io.Templates/createTemplate',
    requestStream: false,
    responseStream: false,
    requestType: io_common_template_pb.PassTemplate,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_PassTemplate,
    requestDeserialize: deserialize_io_PassTemplate,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updateTemplate: {
    path: '/io.Templates/updateTemplate',
    requestStream: false,
    responseStream: false,
    requestType: io_common_template_pb.PassTemplate,
    responseType: io_common_template_pb.PassTemplate,
    requestSerialize: serialize_io_PassTemplate,
    requestDeserialize: deserialize_io_PassTemplate,
    responseSerialize: serialize_io_PassTemplate,
    responseDeserialize: deserialize_io_PassTemplate,
  },
  getTemplate: {
    path: '/io.Templates/getTemplate',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_template_pb.PassTemplateResponse,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_PassTemplateResponse,
    responseDeserialize: deserialize_io_PassTemplateResponse,
  },
  getDefaultTemplate: {
    path: '/io.Templates/getDefaultTemplate',
    requestStream: false,
    responseStream: false,
    requestType: io_common_template_pb.DefaultTemplateRequest,
    responseType: io_common_template_pb.PassTemplate,
    requestSerialize: serialize_io_DefaultTemplateRequest,
    requestDeserialize: deserialize_io_DefaultTemplateRequest,
    responseSerialize: serialize_io_PassTemplate,
    responseDeserialize: deserialize_io_PassTemplate,
  },
  copyTemplate: {
    path: '/io.Templates/copyTemplate',
    requestStream: false,
    responseStream: false,
    requestType: io_common_template_pb.CopyObjectInput,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_CopyObjectInput,
    requestDeserialize: deserialize_io_CopyObjectInput,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  deleteTemplate: {
    path: '/io.Templates/deleteTemplate',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listTemplatesForUserDeprecated: {
    path: '/io.Templates/listTemplatesForUserDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_template_pb.PassTemplateResponse,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_PassTemplateResponse,
    responseDeserialize: deserialize_io_PassTemplateResponse,
  },
  listTemplatesForUser: {
    path: '/io.Templates/listTemplatesForUser',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_template_pb.PassTemplateResponse,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_PassTemplateResponse,
    responseDeserialize: deserialize_io_PassTemplateResponse,
  },
  listTemplatesDeprecated: {
    path: '/io.Templates/listTemplatesDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_template_pb.PassTemplateResponse,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_PassTemplateResponse,
    responseDeserialize: deserialize_io_PassTemplateResponse,
  },
  listTemplates: {
    path: '/io.Templates/listTemplates',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_template_pb.PassTemplateResponse,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_PassTemplateResponse,
    responseDeserialize: deserialize_io_PassTemplateResponse,
  },
  countTemplatesDeprecated: {
    path: '/io.Templates/countTemplatesDeprecated',
    requestStream: false,
    responseStream: false,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  countTemplates: {
    path: '/io.Templates/countTemplates',
    requestStream: false,
    responseStream: false,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  countTemplatesForUserDeprecated: {
    path: '/io.Templates/countTemplatesForUserDeprecated',
    requestStream: false,
    responseStream: false,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  countTemplatesForUser: {
    path: '/io.Templates/countTemplatesForUser',
    requestStream: false,
    responseStream: false,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  createLocation: {
    path: '/io.Templates/createLocation',
    requestStream: false,
    responseStream: false,
    requestType: io_common_proximity_pb.GPSLocation,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_GPSLocation,
    requestDeserialize: deserialize_io_GPSLocation,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updateLocation: {
    path: '/io.Templates/updateLocation',
    requestStream: false,
    responseStream: false,
    requestType: io_common_proximity_pb.GPSLocation,
    responseType: io_common_proximity_pb.GPSLocation,
    requestSerialize: serialize_io_GPSLocation,
    requestDeserialize: deserialize_io_GPSLocation,
    responseSerialize: serialize_io_GPSLocation,
    responseDeserialize: deserialize_io_GPSLocation,
  },
  getLocation: {
    path: '/io.Templates/getLocation',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_proximity_pb.GPSLocation,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_GPSLocation,
    responseDeserialize: deserialize_io_GPSLocation,
  },
  listLocationsDeprecated: {
    path: '/io.Templates/listLocationsDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_proximity_pb.GPSLocation,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_GPSLocation,
    responseDeserialize: deserialize_io_GPSLocation,
  },
  listLocations: {
    path: '/io.Templates/listLocations',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_proximity_pb.GPSLocation,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_GPSLocation,
    responseDeserialize: deserialize_io_GPSLocation,
  },
  copyLocation: {
    path: '/io.Templates/copyLocation',
    requestStream: false,
    responseStream: false,
    requestType: io_common_template_pb.CopyObjectInput,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_CopyObjectInput,
    requestDeserialize: deserialize_io_CopyObjectInput,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  deleteLocation: {
    path: '/io.Templates/deleteLocation',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  countLocationsDeprecated: {
    path: '/io.Templates/countLocationsDeprecated',
    requestStream: false,
    responseStream: false,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  countLocations: {
    path: '/io.Templates/countLocations',
    requestStream: false,
    responseStream: false,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  createBeacon: {
    path: '/io.Templates/createBeacon',
    requestStream: false,
    responseStream: false,
    requestType: io_common_proximity_pb.Beacon,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_Beacon,
    requestDeserialize: deserialize_io_Beacon,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updateBeacon: {
    path: '/io.Templates/updateBeacon',
    requestStream: false,
    responseStream: false,
    requestType: io_common_proximity_pb.Beacon,
    responseType: io_common_proximity_pb.Beacon,
    requestSerialize: serialize_io_Beacon,
    requestDeserialize: deserialize_io_Beacon,
    responseSerialize: serialize_io_Beacon,
    responseDeserialize: deserialize_io_Beacon,
  },
  getBeacon: {
    path: '/io.Templates/getBeacon',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_proximity_pb.Beacon,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_Beacon,
    responseDeserialize: deserialize_io_Beacon,
  },
  listBeaconsDeprecated: {
    path: '/io.Templates/listBeaconsDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_proximity_pb.Beacon,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_Beacon,
    responseDeserialize: deserialize_io_Beacon,
  },
  listBeacons: {
    path: '/io.Templates/listBeacons',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_proximity_pb.Beacon,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_Beacon,
    responseDeserialize: deserialize_io_Beacon,
  },
  copyBeacon: {
    path: '/io.Templates/copyBeacon',
    requestStream: false,
    responseStream: false,
    requestType: io_common_template_pb.CopyObjectInput,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_CopyObjectInput,
    requestDeserialize: deserialize_io_CopyObjectInput,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  deleteBeacon: {
    path: '/io.Templates/deleteBeacon',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  countBeaconsDeprecated: {
    path: '/io.Templates/countBeaconsDeprecated',
    requestStream: false,
    responseStream: false,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  countBeacons: {
    path: '/io.Templates/countBeacons',
    requestStream: false,
    responseStream: false,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  createLink: {
    path: '/io.Templates/createLink',
    requestStream: false,
    responseStream: false,
    requestType: io_common_links_pb.Link,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_Link,
    requestDeserialize: deserialize_io_Link,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updateLink: {
    path: '/io.Templates/updateLink',
    requestStream: false,
    responseStream: false,
    requestType: io_common_links_pb.Link,
    responseType: io_common_links_pb.Link,
    requestSerialize: serialize_io_Link,
    requestDeserialize: deserialize_io_Link,
    responseSerialize: serialize_io_Link,
    responseDeserialize: deserialize_io_Link,
  },
  getLink: {
    path: '/io.Templates/getLink',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_links_pb.Link,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_Link,
    responseDeserialize: deserialize_io_Link,
  },
  listLinksDeprecated: {
    path: '/io.Templates/listLinksDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_links_pb.Link,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_Link,
    responseDeserialize: deserialize_io_Link,
  },
  listLinks: {
    path: '/io.Templates/listLinks',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_links_pb.Link,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_Link,
    responseDeserialize: deserialize_io_Link,
  },
  copyLink: {
    path: '/io.Templates/copyLink',
    requestStream: false,
    responseStream: false,
    requestType: io_common_template_pb.CopyObjectInput,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_CopyObjectInput,
    requestDeserialize: deserialize_io_CopyObjectInput,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  deleteLink: {
    path: '/io.Templates/deleteLink',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  countLinksDeprecated: {
    path: '/io.Templates/countLinksDeprecated',
    requestStream: false,
    responseStream: false,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  countLinks: {
    path: '/io.Templates/countLinks',
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

exports.TemplatesClient = grpc.makeGenericClientConstructor(TemplatesService, 'Templates');
