// source: io/common/protocols.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.io.PassProtocol', null, global);
goog.exportSymbol('proto.io.ProtocolCommonEvents', null, global);
/**
 * @enum {number}
 */
proto.io.PassProtocol = {
  PASS_PROTOCOL_DO_NOT_USE: 0,
  RAW_PROTOCOL: 1,
  V1_PROTOCOL: 2,
  FLIGHT_PROTOCOL: 3,
  MEMBERSHIP: 100,
  SINGLE_USE_COUPON: 101,
  EVENT_TICKETING: 102
};

/**
 * @enum {number}
 */
proto.io.ProtocolCommonEvents = {
  PROTOCOL_COMMON_EVENTS_DO_NOT_USE: 0,
  EVENT_OBJECT_CREATED: 1,
  EVENT_OBJECT_UPDATED: 2,
  EVENT_OBJECT_EXPIRED: 3,
  EVENT_OBJECT_DELETED: 4,
  EVENT_PASS_ISSUED: 5,
  EVENT_PASS_INSTALLED: 6,
  EVENT_PASS_UNINSTALLED: 7,
  EVENT_PASS_INVALIDATED: 8
};

goog.object.extend(exports, proto.io);
