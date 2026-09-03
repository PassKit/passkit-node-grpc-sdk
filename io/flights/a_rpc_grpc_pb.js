// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// Flights RPC
//
// The PassKit Flights API lets you manage your flights and boarding passes for Apple Wallet and Google Wallet.
'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_flights_boarding_pass_pb = require('../../io/flights/boarding_pass_pb.js');
var io_flights_airport_pb = require('../../io/flights/airport_pb.js');
var io_flights_flight_pb = require('../../io/flights/flight_pb.js');
var io_flights_flight_designator_pb = require('../../io/flights/flight_designator_pb.js');
var io_flights_carrier_pb = require('../../io/flights/carrier_pb.js');

function serialize_flights_AirportCode(arg) {
  if (!(arg instanceof io_flights_airport_pb.AirportCode)) {
    throw new Error('Expected argument of type flights.AirportCode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flights_AirportCode(buffer_arg) {
  return io_flights_airport_pb.AirportCode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flights_BoardingPassRecord(arg) {
  if (!(arg instanceof io_flights_boarding_pass_pb.BoardingPassRecord)) {
    throw new Error('Expected argument of type flights.BoardingPassRecord');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flights_BoardingPassRecord(buffer_arg) {
  return io_flights_boarding_pass_pb.BoardingPassRecord.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flights_BoardingPassRecordRequest(arg) {
  if (!(arg instanceof io_flights_boarding_pass_pb.BoardingPassRecordRequest)) {
    throw new Error('Expected argument of type flights.BoardingPassRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flights_BoardingPassRecordRequest(buffer_arg) {
  return io_flights_boarding_pass_pb.BoardingPassRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flights_BoardingPassRequest(arg) {
  if (!(arg instanceof io_flights_boarding_pass_pb.BoardingPassRequest)) {
    throw new Error('Expected argument of type flights.BoardingPassRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flights_BoardingPassRequest(buffer_arg) {
  return io_flights_boarding_pass_pb.BoardingPassRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flights_BoardingPassesResponse(arg) {
  if (!(arg instanceof io_flights_boarding_pass_pb.BoardingPassesResponse)) {
    throw new Error('Expected argument of type flights.BoardingPassesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flights_BoardingPassesResponse(buffer_arg) {
  return io_flights_boarding_pass_pb.BoardingPassesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flights_Carrier(arg) {
  if (!(arg instanceof io_flights_carrier_pb.Carrier)) {
    throw new Error('Expected argument of type flights.Carrier');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flights_Carrier(buffer_arg) {
  return io_flights_carrier_pb.Carrier.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flights_CarrierCode(arg) {
  if (!(arg instanceof io_flights_carrier_pb.CarrierCode)) {
    throw new Error('Expected argument of type flights.CarrierCode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flights_CarrierCode(buffer_arg) {
  return io_flights_carrier_pb.CarrierCode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flights_Flight(arg) {
  if (!(arg instanceof io_flights_flight_pb.Flight)) {
    throw new Error('Expected argument of type flights.Flight');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flights_Flight(buffer_arg) {
  return io_flights_flight_pb.Flight.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flights_FlightDesignator(arg) {
  if (!(arg instanceof io_flights_flight_designator_pb.FlightDesignator)) {
    throw new Error('Expected argument of type flights.FlightDesignator');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flights_FlightDesignator(buffer_arg) {
  return io_flights_flight_designator_pb.FlightDesignator.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flights_FlightDesignatorRequest(arg) {
  if (!(arg instanceof io_flights_flight_designator_pb.FlightDesignatorRequest)) {
    throw new Error('Expected argument of type flights.FlightDesignatorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flights_FlightDesignatorRequest(buffer_arg) {
  return io_flights_flight_designator_pb.FlightDesignatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flights_FlightRequest(arg) {
  if (!(arg instanceof io_flights_flight_pb.FlightRequest)) {
    throw new Error('Expected argument of type flights.FlightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flights_FlightRequest(buffer_arg) {
  return io_flights_flight_pb.FlightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flights_Port(arg) {
  if (!(arg instanceof io_flights_airport_pb.Port)) {
    throw new Error('Expected argument of type flights.Port');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flights_Port(buffer_arg) {
  return io_flights_airport_pb.Port.deserializeBinary(new Uint8Array(buffer_arg));
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


// Manages carriers, flight designators, flights, and digital boarding passes. Carrier and flight-designator records provide data used when creating flights and boarding passes.
var FlightsService = exports.FlightsService = {
  // Create an airport record. Optional method allowing the carrier to specify how the airport name is rendered in the pass and the GPS location that will trigger a lock-screen alert. Required Fields: airportCode, cityName, airportName, countryCode, timezone.
createPort: {
    path: '/flights.Flights/createPort',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_airport_pb.Port,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_flights_Port,
    requestDeserialize: deserialize_flights_Port,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Retrieve an airport record. The AirportCode is the three character IATA code or 4 character ICAO code. Required Fields: airportCode.
getPort: {
    path: '/flights.Flights/getPort',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_airport_pb.AirportCode,
    responseType: io_flights_airport_pb.Port,
    requestSerialize: serialize_flights_AirportCode,
    requestDeserialize: deserialize_flights_AirportCode,
    responseSerialize: serialize_flights_Port,
    responseDeserialize: deserialize_flights_Port,
  },
  // Update an airport record. Required Fields: airportCode.
updatePort: {
    path: '/flights.Flights/updatePort',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_airport_pb.Port,
    responseType: io_flights_airport_pb.Port,
    requestSerialize: serialize_flights_Port,
    requestDeserialize: deserialize_flights_Port,
    responseSerialize: serialize_flights_Port,
    responseDeserialize: deserialize_flights_Port,
  },
  // Delete an airport record. Deleting a record will remove any custom data provided. A new Airport record may be automatically created for a flight departing, arriving or transiting an airport which does not have a record, using publicly available data. Required Fields: airportCode.
deletePort: {
    path: '/flights.Flights/deletePort',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_airport_pb.AirportCode,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_flights_AirportCode,
    requestDeserialize: deserialize_flights_AirportCode,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Create a carrier record. All Flight Designators and Flights must have a carrier record. Required Fields: carrierCode, airlineName, passTypeIdentifier.
createCarrier: {
    path: '/flights.Flights/createCarrier',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_carrier_pb.Carrier,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_flights_Carrier,
    requestDeserialize: deserialize_flights_Carrier,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Retrieve a carrier record. Required Fields: carrierCode.
getCarrier: {
    path: '/flights.Flights/getCarrier',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_carrier_pb.CarrierCode,
    responseType: io_flights_carrier_pb.Carrier,
    requestSerialize: serialize_flights_CarrierCode,
    requestDeserialize: deserialize_flights_CarrierCode,
    responseSerialize: serialize_flights_Carrier,
    responseDeserialize: deserialize_flights_Carrier,
  },
  // Update a carrier record. Required Fields: carrierCode.
updateCarrier: {
    path: '/flights.Flights/updateCarrier',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_carrier_pb.Carrier,
    responseType: io_flights_carrier_pb.Carrier,
    requestSerialize: serialize_flights_Carrier,
    requestDeserialize: deserialize_flights_Carrier,
    responseSerialize: serialize_flights_Carrier,
    responseDeserialize: deserialize_flights_Carrier,
  },
  // Delete a carrier record. Required Fields: carrierCode.
deleteCarrier: {
    path: '/flights.Flights/deleteCarrier',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_carrier_pb.CarrierCode,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_flights_CarrierCode,
    requestDeserialize: deserialize_flights_CarrierCode,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Create a flight designator record. As much default information as possible should be provided to facilitate the automatic generation of flight records. Required Fields: carrierCode, flightNumber, revision, schedule, origin, destination.
createFlightDesignator: {
    path: '/flights.Flights/createFlightDesignator',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_flight_designator_pb.FlightDesignator,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_flights_FlightDesignator,
    requestDeserialize: deserialize_flights_FlightDesignator,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Retrieve a flight designator record. Required Fields: carrierCode, flightNumber, revision.
getFlightDesignator: {
    path: '/flights.Flights/getFlightDesignator',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_flight_designator_pb.FlightDesignatorRequest,
    responseType: io_flights_flight_designator_pb.FlightDesignator,
    requestSerialize: serialize_flights_FlightDesignatorRequest,
    requestDeserialize: deserialize_flights_FlightDesignatorRequest,
    responseSerialize: serialize_flights_FlightDesignator,
    responseDeserialize: deserialize_flights_FlightDesignator,
  },
  // Update a flight designator record. Required Fields: carrierCode, flightNumber, revision.
updateFlightDesignator: {
    path: '/flights.Flights/updateFlightDesignator',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_flight_designator_pb.FlightDesignator,
    responseType: io_flights_flight_designator_pb.FlightDesignator,
    requestSerialize: serialize_flights_FlightDesignator,
    requestDeserialize: deserialize_flights_FlightDesignator,
    responseSerialize: serialize_flights_FlightDesignator,
    responseDeserialize: deserialize_flights_FlightDesignator,
  },
  // Delete a flight designator record. Required Fields: carrierCode, flightNumber, revision.
deleteFlightDesignator: {
    path: '/flights.Flights/deleteFlightDesignator',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_flight_designator_pb.FlightDesignatorRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_flights_FlightDesignatorRequest,
    requestDeserialize: deserialize_flights_FlightDesignatorRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a flight record. Flight records can be generated automatically; values on this record override carrier and flight-designator data. Required fields: carrierCode, flightNumber, departureDate, boardingPoint, deplaningPoint.
createFlight: {
    path: '/flights.Flights/createFlight',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_flight_pb.Flight,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_flights_Flight,
    requestDeserialize: deserialize_flights_Flight,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Retrieve a flight record. Required Fields: carrierCode, flightNumber, departureDate, boardingPoint, deplaningPoint.
getFlight: {
    path: '/flights.Flights/getFlight',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_flight_pb.FlightRequest,
    responseType: io_flights_flight_pb.Flight,
    requestSerialize: serialize_flights_FlightRequest,
    requestDeserialize: deserialize_flights_FlightRequest,
    responseSerialize: serialize_flights_Flight,
    responseDeserialize: deserialize_flights_Flight,
  },
  // Update a flight record. Required Fields: carrierCode, flightNumber, departureDate, boardingPoint, deplaningPoint.
updateFlight: {
    path: '/flights.Flights/updateFlight',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_flight_pb.Flight,
    responseType: io_flights_flight_pb.Flight,
    requestSerialize: serialize_flights_Flight,
    requestDeserialize: deserialize_flights_Flight,
    responseSerialize: serialize_flights_Flight,
    responseDeserialize: deserialize_flights_Flight,
  },
  // Delete a flight record. Required Fields: carrierCode, flightNumber, departureDate, boardingPoint, deplaningPoint.
deleteFlight: {
    path: '/flights.Flights/deleteFlight',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_flight_pb.FlightRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_flights_FlightRequest,
    requestDeserialize: deserialize_flights_FlightRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a boarding-pass record. Missing flight data is populated from the related flight, flight designator, or carrier records. Required fields: operatingCarrierPNR, boardingPoint, deplaningPoint, carrierCode, flightNumber, departureDate, passenger, sequenceNumber.
createBoardingPass: {
    path: '/flights.Flights/createBoardingPass',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_boarding_pass_pb.BoardingPassRecord,
    responseType: io_flights_boarding_pass_pb.BoardingPassesResponse,
    requestSerialize: serialize_flights_BoardingPassRecord,
    requestDeserialize: deserialize_flights_BoardingPassRecord,
    responseSerialize: serialize_flights_BoardingPassesResponse,
    responseDeserialize: deserialize_flights_BoardingPassesResponse,
  },
  // Retrieve a boarding pass record. Required Fields: ticketNumber or index or passId.
getBoardingPassRecord: {
    path: '/flights.Flights/getBoardingPassRecord',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_boarding_pass_pb.BoardingPassRecordRequest,
    responseType: io_flights_boarding_pass_pb.BoardingPassRecord,
    requestSerialize: serialize_flights_BoardingPassRecordRequest,
    requestDeserialize: deserialize_flights_BoardingPassRecordRequest,
    responseSerialize: serialize_flights_BoardingPassRecord,
    responseDeserialize: deserialize_flights_BoardingPassRecord,
  },
  // Retrieves digital boarding passes in the requested format by ticket number, index, PNR, or pass ID. Required fields: ticketNumber, index, or passId.
getBoardingPass: {
    path: '/flights.Flights/getBoardingPass',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_boarding_pass_pb.BoardingPassRequest,
    responseType: io_flights_boarding_pass_pb.BoardingPassesResponse,
    requestSerialize: serialize_flights_BoardingPassRequest,
    requestDeserialize: deserialize_flights_BoardingPassRequest,
    responseSerialize: serialize_flights_BoardingPassesResponse,
    responseDeserialize: deserialize_flights_BoardingPassesResponse,
  },
  // Update a boarding pass record. Required Fields: operatingCarrierPNR, boardingPoint, deplaningPoint, carrierCode, flightNumber, departureDate, passenger, sequenceNumber.
updateBoardingPass: {
    path: '/flights.Flights/updateBoardingPass',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_boarding_pass_pb.BoardingPassRecord,
    responseType: io_flights_boarding_pass_pb.BoardingPassRecord,
    requestSerialize: serialize_flights_BoardingPassRecord,
    requestDeserialize: deserialize_flights_BoardingPassRecord,
    responseSerialize: serialize_flights_BoardingPassRecord,
    responseDeserialize: deserialize_flights_BoardingPassRecord,
  },
  // Delete a boarding pass record. Required Fields: ticketNumber or index or passId
deleteBoardingPass: {
    path: '/flights.Flights/deleteBoardingPass',
    requestStream: false,
    responseStream: false,
    requestType: io_flights_boarding_pass_pb.BoardingPassRecordRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_flights_BoardingPassRecordRequest,
    requestDeserialize: deserialize_flights_BoardingPassRecordRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.FlightsClient = grpc.makeGenericClientConstructor(FlightsService, 'Flights');
