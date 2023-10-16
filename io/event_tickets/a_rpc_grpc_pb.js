// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// Events Protocol is designed to get your Digital Event Tickets into Apple Wallet and Google Pay, from theatre and cinema, to sport events and concerts.
'use strict';
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
var io_common_filter_pb = require('../../io/common/filter_pb.js');
var io_common_reporting_pb = require('../../io/common/reporting_pb.js');
var io_event_tickets_event_pb = require('../../io/event_tickets/event_pb.js');
var io_event_tickets_production_pb = require('../../io/event_tickets/production_pb.js');
var io_event_tickets_ticket_type_pb = require('../../io/event_tickets/ticket_type_pb.js');
var io_event_tickets_ticket_pb = require('../../io/event_tickets/ticket_pb.js');
var io_event_tickets_venue_pb = require('../../io/event_tickets/venue_pb.js');

function serialize_event_tickets_Event(arg) {
  if (!(arg instanceof io_event_tickets_event_pb.Event)) {
    throw new Error('Expected argument of type event_tickets.Event');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_Event(buffer_arg) {
  return io_event_tickets_event_pb.Event.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_EventListRequest(arg) {
  if (!(arg instanceof io_event_tickets_event_pb.EventListRequest)) {
    throw new Error('Expected argument of type event_tickets.EventListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_EventListRequest(buffer_arg) {
  return io_event_tickets_event_pb.EventListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_EventListResponse(arg) {
  if (!(arg instanceof io_event_tickets_event_pb.EventListResponse)) {
    throw new Error('Expected argument of type event_tickets.EventListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_EventListResponse(buffer_arg) {
  return io_event_tickets_event_pb.EventListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_EventTicketPassRequest(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.EventTicketPassRequest)) {
    throw new Error('Expected argument of type event_tickets.EventTicketPassRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_EventTicketPassRequest(buffer_arg) {
  return io_event_tickets_ticket_pb.EventTicketPassRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_EventTicketPerson(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.EventTicketPerson)) {
    throw new Error('Expected argument of type event_tickets.EventTicketPerson');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_EventTicketPerson(buffer_arg) {
  return io_event_tickets_ticket_pb.EventTicketPerson.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_GetByUidRequest(arg) {
  if (!(arg instanceof io_event_tickets_ticket_type_pb.GetByUidRequest)) {
    throw new Error('Expected argument of type event_tickets.GetByUidRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_GetByUidRequest(buffer_arg) {
  return io_event_tickets_ticket_type_pb.GetByUidRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_GetEventRequest(arg) {
  if (!(arg instanceof io_event_tickets_event_pb.GetEventRequest)) {
    throw new Error('Expected argument of type event_tickets.GetEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_GetEventRequest(buffer_arg) {
  return io_event_tickets_event_pb.GetEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_IssueTicketRequest(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.IssueTicketRequest)) {
    throw new Error('Expected argument of type event_tickets.IssueTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_IssueTicketRequest(buffer_arg) {
  return io_event_tickets_ticket_pb.IssueTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_IssueTicketResponseIds(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.IssueTicketResponseIds)) {
    throw new Error('Expected argument of type event_tickets.IssueTicketResponseIds');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_IssueTicketResponseIds(buffer_arg) {
  return io_event_tickets_ticket_pb.IssueTicketResponseIds.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_OrderNumberRequest(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.OrderNumberRequest)) {
    throw new Error('Expected argument of type event_tickets.OrderNumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_OrderNumberRequest(buffer_arg) {
  return io_event_tickets_ticket_pb.OrderNumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_Production(arg) {
  if (!(arg instanceof io_event_tickets_production_pb.Production)) {
    throw new Error('Expected argument of type event_tickets.Production');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_Production(buffer_arg) {
  return io_event_tickets_production_pb.Production.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_ProductionAnalyticsResponse(arg) {
  if (!(arg instanceof io_event_tickets_production_pb.ProductionAnalyticsResponse)) {
    throw new Error('Expected argument of type event_tickets.ProductionAnalyticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_ProductionAnalyticsResponse(buffer_arg) {
  return io_event_tickets_production_pb.ProductionAnalyticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_ProductionCopyRequest(arg) {
  if (!(arg instanceof io_event_tickets_production_pb.ProductionCopyRequest)) {
    throw new Error('Expected argument of type event_tickets.ProductionCopyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_ProductionCopyRequest(buffer_arg) {
  return io_event_tickets_production_pb.ProductionCopyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_RedeemByOrderNumber(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.RedeemByOrderNumber)) {
    throw new Error('Expected argument of type event_tickets.RedeemByOrderNumber');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_RedeemByOrderNumber(buffer_arg) {
  return io_event_tickets_ticket_pb.RedeemByOrderNumber.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_RedeemTicketRequest(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.RedeemTicketRequest)) {
    throw new Error('Expected argument of type event_tickets.RedeemTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_RedeemTicketRequest(buffer_arg) {
  return io_event_tickets_ticket_pb.RedeemTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_Ticket(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.Ticket)) {
    throw new Error('Expected argument of type event_tickets.Ticket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_Ticket(buffer_arg) {
  return io_event_tickets_ticket_pb.Ticket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_TicketId(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.TicketId)) {
    throw new Error('Expected argument of type event_tickets.TicketId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_TicketId(buffer_arg) {
  return io_event_tickets_ticket_pb.TicketId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_TicketLimitedFields(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.TicketLimitedFields)) {
    throw new Error('Expected argument of type event_tickets.TicketLimitedFields');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_TicketLimitedFields(buffer_arg) {
  return io_event_tickets_ticket_pb.TicketLimitedFields.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_TicketListRequest(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.TicketListRequest)) {
    throw new Error('Expected argument of type event_tickets.TicketListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_TicketListRequest(buffer_arg) {
  return io_event_tickets_ticket_pb.TicketListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_TicketNumberRequest(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.TicketNumberRequest)) {
    throw new Error('Expected argument of type event_tickets.TicketNumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_TicketNumberRequest(buffer_arg) {
  return io_event_tickets_ticket_pb.TicketNumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_TicketType(arg) {
  if (!(arg instanceof io_event_tickets_ticket_type_pb.TicketType)) {
    throw new Error('Expected argument of type event_tickets.TicketType');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_TicketType(buffer_arg) {
  return io_event_tickets_ticket_type_pb.TicketType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_TicketTypeListRequest(arg) {
  if (!(arg instanceof io_event_tickets_ticket_type_pb.TicketTypeListRequest)) {
    throw new Error('Expected argument of type event_tickets.TicketTypeListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_TicketTypeListRequest(buffer_arg) {
  return io_event_tickets_ticket_type_pb.TicketTypeListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_Tickets(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.Tickets)) {
    throw new Error('Expected argument of type event_tickets.Tickets');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_Tickets(buffer_arg) {
  return io_event_tickets_ticket_pb.Tickets.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_ValidateTicketRequest(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.ValidateTicketRequest)) {
    throw new Error('Expected argument of type event_tickets.ValidateTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_ValidateTicketRequest(buffer_arg) {
  return io_event_tickets_ticket_pb.ValidateTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_ValidateTicketResponse(arg) {
  if (!(arg instanceof io_event_tickets_ticket_pb.ValidateTicketResponse)) {
    throw new Error('Expected argument of type event_tickets.ValidateTicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_ValidateTicketResponse(buffer_arg) {
  return io_event_tickets_ticket_pb.ValidateTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_tickets_Venue(arg) {
  if (!(arg instanceof io_event_tickets_venue_pb.Venue)) {
    throw new Error('Expected argument of type event_tickets.Venue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_tickets_Venue(buffer_arg) {
  return io_event_tickets_venue_pb.Venue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_AnalyticsRequest(arg) {
  if (!(arg instanceof io_common_reporting_pb.AnalyticsRequest)) {
    throw new Error('Expected argument of type io.AnalyticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_AnalyticsRequest(buffer_arg) {
  return io_common_reporting_pb.AnalyticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_Ids(arg) {
  if (!(arg instanceof io_common_common_objects_pb.Ids)) {
    throw new Error('Expected argument of type io.Ids');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Ids(buffer_arg) {
  return io_common_common_objects_pb.Ids.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_PassBundles(arg) {
  if (!(arg instanceof io_common_common_objects_pb.PassBundles)) {
    throw new Error('Expected argument of type io.PassBundles');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_PassBundles(buffer_arg) {
  return io_common_common_objects_pb.PassBundles.deserializeBinary(new Uint8Array(buffer_arg));
}


var EventTicketsService = exports['event_tickets.EventTickets'] = {
  createProduction: {
    path: '/event_tickets.EventTickets/createProduction',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_production_pb.Production,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_event_tickets_Production,
    requestDeserialize: deserialize_event_tickets_Production,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  patchProduction: {
    path: '/event_tickets.EventTickets/patchProduction',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_production_pb.Production,
    responseType: io_event_tickets_production_pb.Production,
    requestSerialize: serialize_event_tickets_Production,
    requestDeserialize: deserialize_event_tickets_Production,
    responseSerialize: serialize_event_tickets_Production,
    responseDeserialize: deserialize_event_tickets_Production,
  },
  updateProduction: {
    path: '/event_tickets.EventTickets/updateProduction',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_production_pb.Production,
    responseType: io_event_tickets_production_pb.Production,
    requestSerialize: serialize_event_tickets_Production,
    requestDeserialize: deserialize_event_tickets_Production,
    responseSerialize: serialize_event_tickets_Production,
    responseDeserialize: deserialize_event_tickets_Production,
  },
  getProduction: {
    path: '/event_tickets.EventTickets/getProduction',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_event_tickets_production_pb.Production,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_event_tickets_Production,
    responseDeserialize: deserialize_event_tickets_Production,
  },
  deleteProduction: {
    path: '/event_tickets.EventTickets/deleteProduction',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_production_pb.Production,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_event_tickets_Production,
    requestDeserialize: deserialize_event_tickets_Production,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listProductions: {
    path: '/event_tickets.EventTickets/listProductions',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_event_tickets_production_pb.Production,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_event_tickets_Production,
    responseDeserialize: deserialize_event_tickets_Production,
  },
  getAnalytics: {
    path: '/event_tickets.EventTickets/getAnalytics',
    requestStream: false,
    responseStream: false,
    requestType: io_common_reporting_pb.AnalyticsRequest,
    responseType: io_event_tickets_production_pb.ProductionAnalyticsResponse,
    requestSerialize: serialize_io_AnalyticsRequest,
    requestDeserialize: deserialize_io_AnalyticsRequest,
    responseSerialize: serialize_event_tickets_ProductionAnalyticsResponse,
    responseDeserialize: deserialize_event_tickets_ProductionAnalyticsResponse,
  },
  copyProduction: {
    path: '/event_tickets.EventTickets/copyProduction',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_production_pb.ProductionCopyRequest,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_event_tickets_ProductionCopyRequest,
    requestDeserialize: deserialize_event_tickets_ProductionCopyRequest,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  createVenue: {
    path: '/event_tickets.EventTickets/createVenue',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_venue_pb.Venue,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_event_tickets_Venue,
    requestDeserialize: deserialize_event_tickets_Venue,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updateVenue: {
    path: '/event_tickets.EventTickets/updateVenue',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_venue_pb.Venue,
    responseType: io_event_tickets_venue_pb.Venue,
    requestSerialize: serialize_event_tickets_Venue,
    requestDeserialize: deserialize_event_tickets_Venue,
    responseSerialize: serialize_event_tickets_Venue,
    responseDeserialize: deserialize_event_tickets_Venue,
  },
  patchVenue: {
    path: '/event_tickets.EventTickets/patchVenue',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_venue_pb.Venue,
    responseType: io_event_tickets_venue_pb.Venue,
    requestSerialize: serialize_event_tickets_Venue,
    requestDeserialize: deserialize_event_tickets_Venue,
    responseSerialize: serialize_event_tickets_Venue,
    responseDeserialize: deserialize_event_tickets_Venue,
  },
  getVenueById: {
    path: '/event_tickets.EventTickets/getVenueById',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_event_tickets_venue_pb.Venue,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_event_tickets_Venue,
    responseDeserialize: deserialize_event_tickets_Venue,
  },
  deleteVenue: {
    path: '/event_tickets.EventTickets/deleteVenue',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_venue_pb.Venue,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_event_tickets_Venue,
    requestDeserialize: deserialize_event_tickets_Venue,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listVenues: {
    path: '/event_tickets.EventTickets/listVenues',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_event_tickets_venue_pb.Venue,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_event_tickets_Venue,
    responseDeserialize: deserialize_event_tickets_Venue,
  },
  createEvent: {
    path: '/event_tickets.EventTickets/createEvent',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_event_pb.Event,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_event_tickets_Event,
    requestDeserialize: deserialize_event_tickets_Event,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updateEvent: {
    path: '/event_tickets.EventTickets/updateEvent',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_event_pb.Event,
    responseType: io_event_tickets_event_pb.Event,
    requestSerialize: serialize_event_tickets_Event,
    requestDeserialize: deserialize_event_tickets_Event,
    responseSerialize: serialize_event_tickets_Event,
    responseDeserialize: deserialize_event_tickets_Event,
  },
  patchEvent: {
    path: '/event_tickets.EventTickets/patchEvent',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_event_pb.Event,
    responseType: io_event_tickets_event_pb.Event,
    requestSerialize: serialize_event_tickets_Event,
    requestDeserialize: deserialize_event_tickets_Event,
    responseSerialize: serialize_event_tickets_Event,
    responseDeserialize: deserialize_event_tickets_Event,
  },
  getEventById: {
    path: '/event_tickets.EventTickets/getEventById',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_event_tickets_event_pb.Event,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_event_tickets_Event,
    responseDeserialize: deserialize_event_tickets_Event,
  },
  getEventByStartDateAndVenue: {
    path: '/event_tickets.EventTickets/getEventByStartDateAndVenue',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_event_pb.GetEventRequest,
    responseType: io_event_tickets_event_pb.Event,
    requestSerialize: serialize_event_tickets_GetEventRequest,
    requestDeserialize: deserialize_event_tickets_GetEventRequest,
    responseSerialize: serialize_event_tickets_Event,
    responseDeserialize: deserialize_event_tickets_Event,
  },
  deleteEvent: {
    path: '/event_tickets.EventTickets/deleteEvent',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_event_pb.Event,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_event_tickets_Event,
    requestDeserialize: deserialize_event_tickets_Event,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listEvents: {
    path: '/event_tickets.EventTickets/listEvents',
    requestStream: false,
    responseStream: true,
    requestType: io_event_tickets_event_pb.EventListRequest,
    responseType: io_event_tickets_event_pb.EventListResponse,
    requestSerialize: serialize_event_tickets_EventListRequest,
    requestDeserialize: deserialize_event_tickets_EventListRequest,
    responseSerialize: serialize_event_tickets_EventListResponse,
    responseDeserialize: deserialize_event_tickets_EventListResponse,
  },
  createTicketType: {
    path: '/event_tickets.EventTickets/createTicketType',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_type_pb.TicketType,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_event_tickets_TicketType,
    requestDeserialize: deserialize_event_tickets_TicketType,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updateTicketType: {
    path: '/event_tickets.EventTickets/updateTicketType',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_type_pb.TicketType,
    responseType: io_event_tickets_ticket_type_pb.TicketType,
    requestSerialize: serialize_event_tickets_TicketType,
    requestDeserialize: deserialize_event_tickets_TicketType,
    responseSerialize: serialize_event_tickets_TicketType,
    responseDeserialize: deserialize_event_tickets_TicketType,
  },
  patchTicketType: {
    path: '/event_tickets.EventTickets/patchTicketType',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_type_pb.TicketType,
    responseType: io_event_tickets_ticket_type_pb.TicketType,
    requestSerialize: serialize_event_tickets_TicketType,
    requestDeserialize: deserialize_event_tickets_TicketType,
    responseSerialize: serialize_event_tickets_TicketType,
    responseDeserialize: deserialize_event_tickets_TicketType,
  },
  getTicketTypeById: {
    path: '/event_tickets.EventTickets/getTicketTypeById',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_event_tickets_ticket_type_pb.TicketType,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_event_tickets_TicketType,
    responseDeserialize: deserialize_event_tickets_TicketType,
  },
  getTicketTypeByUserDefinedId: {
    path: '/event_tickets.EventTickets/getTicketTypeByUserDefinedId',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_type_pb.GetByUidRequest,
    responseType: io_event_tickets_ticket_type_pb.TicketType,
    requestSerialize: serialize_event_tickets_GetByUidRequest,
    requestDeserialize: deserialize_event_tickets_GetByUidRequest,
    responseSerialize: serialize_event_tickets_TicketType,
    responseDeserialize: deserialize_event_tickets_TicketType,
  },
  deleteTicketType: {
    path: '/event_tickets.EventTickets/deleteTicketType',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_type_pb.TicketType,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_event_tickets_TicketType,
    requestDeserialize: deserialize_event_tickets_TicketType,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listTicketTypes: {
    path: '/event_tickets.EventTickets/listTicketTypes',
    requestStream: false,
    responseStream: true,
    requestType: io_event_tickets_ticket_type_pb.TicketTypeListRequest,
    responseType: io_event_tickets_ticket_type_pb.TicketType,
    requestSerialize: serialize_event_tickets_TicketTypeListRequest,
    requestDeserialize: deserialize_event_tickets_TicketTypeListRequest,
    responseSerialize: serialize_event_tickets_TicketType,
    responseDeserialize: deserialize_event_tickets_TicketType,
  },
  issueTicket: {
    path: '/event_tickets.EventTickets/issueTicket',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_pb.IssueTicketRequest,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_event_tickets_IssueTicketRequest,
    requestDeserialize: deserialize_event_tickets_IssueTicketRequest,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  issueTicketById: {
    path: '/event_tickets.EventTickets/issueTicketById',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_pb.Ticket,
    responseType: io_event_tickets_ticket_pb.IssueTicketResponseIds,
    requestSerialize: serialize_event_tickets_Ticket,
    requestDeserialize: deserialize_event_tickets_Ticket,
    responseSerialize: serialize_event_tickets_IssueTicketResponseIds,
    responseDeserialize: deserialize_event_tickets_IssueTicketResponseIds,
  },
  updateTicket: {
    path: '/event_tickets.EventTickets/updateTicket',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_pb.Ticket,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_event_tickets_Ticket,
    requestDeserialize: deserialize_event_tickets_Ticket,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  patchPerson: {
    path: '/event_tickets.EventTickets/patchPerson',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_pb.EventTicketPerson,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_event_tickets_EventTicketPerson,
    requestDeserialize: deserialize_event_tickets_EventTicketPerson,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  validateTicket: {
    path: '/event_tickets.EventTickets/validateTicket',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_pb.ValidateTicketRequest,
    responseType: io_event_tickets_ticket_pb.ValidateTicketResponse,
    requestSerialize: serialize_event_tickets_ValidateTicketRequest,
    requestDeserialize: deserialize_event_tickets_ValidateTicketRequest,
    responseSerialize: serialize_event_tickets_ValidateTicketResponse,
    responseDeserialize: deserialize_event_tickets_ValidateTicketResponse,
  },
  redeemTicket: {
    path: '/event_tickets.EventTickets/redeemTicket',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_pb.RedeemTicketRequest,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_event_tickets_RedeemTicketRequest,
    requestDeserialize: deserialize_event_tickets_RedeemTicketRequest,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  redeemTicketsByOrderNumber: {
    path: '/event_tickets.EventTickets/redeemTicketsByOrderNumber',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_pb.RedeemByOrderNumber,
    responseType: io_common_common_objects_pb.Ids,
    requestSerialize: serialize_event_tickets_RedeemByOrderNumber,
    requestDeserialize: deserialize_event_tickets_RedeemByOrderNumber,
    responseSerialize: serialize_io_Ids,
    responseDeserialize: deserialize_io_Ids,
  },
  getTicketById: {
    path: '/event_tickets.EventTickets/getTicketById',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_event_tickets_ticket_pb.Ticket,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_event_tickets_Ticket,
    responseDeserialize: deserialize_event_tickets_Ticket,
  },
  getTicketByTicketNumber: {
    path: '/event_tickets.EventTickets/getTicketByTicketNumber',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_pb.TicketNumberRequest,
    responseType: io_event_tickets_ticket_pb.Ticket,
    requestSerialize: serialize_event_tickets_TicketNumberRequest,
    requestDeserialize: deserialize_event_tickets_TicketNumberRequest,
    responseSerialize: serialize_event_tickets_Ticket,
    responseDeserialize: deserialize_event_tickets_Ticket,
  },
  getTicketsByOrderNumber: {
    path: '/event_tickets.EventTickets/getTicketsByOrderNumber',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_pb.OrderNumberRequest,
    responseType: io_event_tickets_ticket_pb.Tickets,
    requestSerialize: serialize_event_tickets_OrderNumberRequest,
    requestDeserialize: deserialize_event_tickets_OrderNumberRequest,
    responseSerialize: serialize_event_tickets_Tickets,
    responseDeserialize: deserialize_event_tickets_Tickets,
  },
  getEventTicketPass: {
    path: '/event_tickets.EventTickets/getEventTicketPass',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_pb.EventTicketPassRequest,
    responseType: io_common_common_objects_pb.PassBundles,
    requestSerialize: serialize_event_tickets_EventTicketPassRequest,
    requestDeserialize: deserialize_event_tickets_EventTicketPassRequest,
    responseSerialize: serialize_io_PassBundles,
    responseDeserialize: deserialize_io_PassBundles,
  },
  deleteTicket: {
    path: '/event_tickets.EventTickets/deleteTicket',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_pb.TicketId,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_event_tickets_TicketId,
    requestDeserialize: deserialize_event_tickets_TicketId,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteTicketsByOrderNumber: {
    path: '/event_tickets.EventTickets/deleteTicketsByOrderNumber',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_pb.OrderNumberRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_event_tickets_OrderNumberRequest,
    requestDeserialize: deserialize_event_tickets_OrderNumberRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listTickets: {
    path: '/event_tickets.EventTickets/listTickets',
    requestStream: false,
    responseStream: true,
    requestType: io_event_tickets_ticket_pb.TicketListRequest,
    responseType: io_event_tickets_ticket_pb.TicketLimitedFields,
    requestSerialize: serialize_event_tickets_TicketListRequest,
    requestDeserialize: deserialize_event_tickets_TicketListRequest,
    responseSerialize: serialize_event_tickets_TicketLimitedFields,
    responseDeserialize: deserialize_event_tickets_TicketLimitedFields,
  },
  countTickets: {
    path: '/event_tickets.EventTickets/countTickets',
    requestStream: false,
    responseStream: false,
    requestType: io_event_tickets_ticket_pb.TicketListRequest,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_event_tickets_TicketListRequest,
    requestDeserialize: deserialize_event_tickets_TicketListRequest,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
};

