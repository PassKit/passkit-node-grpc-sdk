// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
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

function serialize_io_Id(arg) {
  if (!(arg instanceof io_common_common_objects_pb.Id)) {
    throw new Error('Expected argument of type io.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Id(buffer_arg) {
  return io_common_common_objects_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_SendMessageRequest(arg) {
  if (!(arg instanceof io_common_message_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type io.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_SendMessageRequest(buffer_arg) {
  return io_common_message_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_SendMessageResponse(arg) {
  if (!(arg instanceof io_common_message_pb.SendMessageResponse)) {
    throw new Error('Expected argument of type io.SendMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_SendMessageResponse(buffer_arg) {
  return io_common_message_pb.SendMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MessagesService = exports.MessagesService = {
  getMessage: {
    path: '/io.Messages/getMessage',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_message_pb.Message,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_Message,
    responseDeserialize: deserialize_io_Message,
  },
  createMessage: {
    path: '/io.Messages/createMessage',
    requestStream: false,
    responseStream: false,
    requestType: io_common_message_pb.Message,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_Message,
    requestDeserialize: deserialize_io_Message,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updateMessage: {
    path: '/io.Messages/updateMessage',
    requestStream: false,
    responseStream: false,
    requestType: io_common_message_pb.Message,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Message,
    requestDeserialize: deserialize_io_Message,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteMessage: {
    path: '/io.Messages/deleteMessage',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  sendMessage: {
    path: '/io.Messages/sendMessage',
    requestStream: false,
    responseStream: false,
    requestType: io_common_message_pb.SendMessageRequest,
    responseType: io_common_message_pb.SendMessageResponse,
    requestSerialize: serialize_io_SendMessageRequest,
    requestDeserialize: deserialize_io_SendMessageRequest,
    responseSerialize: serialize_io_SendMessageResponse,
    responseDeserialize: deserialize_io_SendMessageResponse,
  },
};

exports.MessagesClient = grpc.makeGenericClientConstructor(MessagesService, 'Messages');
