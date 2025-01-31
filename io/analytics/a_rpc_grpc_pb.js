// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// Analytics RPC
//
// The PassKit Analytics API lets you track the performance of Apple Wallet and Google Pay passes.
'use strict';
var grpc = require('@grpc/grpc-js');
var io_common_reporting_pb = require('../../io/common/reporting_pb.js');

function serialize_io_AnalyticsRequest(arg) {
  if (!(arg instanceof io_common_reporting_pb.AnalyticsRequest)) {
    throw new Error('Expected argument of type io.AnalyticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_AnalyticsRequest(buffer_arg) {
  return io_common_reporting_pb.AnalyticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_AnalyticsResponse(arg) {
  if (!(arg instanceof io_common_reporting_pb.AnalyticsResponse)) {
    throw new Error('Expected argument of type io.AnalyticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_AnalyticsResponse(buffer_arg) {
  return io_common_reporting_pb.AnalyticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AnalyticsService = exports.AnalyticsService = {
  // Retrieve a daily, monthly or yearly record.
getAnalytics: {
    path: '/analytics.Analytics/getAnalytics',
    requestStream: false,
    responseStream: false,
    requestType: io_common_reporting_pb.AnalyticsRequest,
    responseType: io_common_reporting_pb.AnalyticsResponse,
    requestSerialize: serialize_io_AnalyticsRequest,
    requestDeserialize: deserialize_io_AnalyticsRequest,
    responseSerialize: serialize_io_AnalyticsResponse,
    responseDeserialize: deserialize_io_AnalyticsResponse,
  },
};

exports.AnalyticsClient = grpc.makeGenericClientConstructor(AnalyticsService);
