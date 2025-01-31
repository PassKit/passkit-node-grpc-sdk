// source: io/common/attributes.proto
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

goog.exportSymbol('proto.io.Authentication', null, global);
goog.exportSymbol('proto.io.Channel', null, global);
goog.exportSymbol('proto.io.DeviceAttributes', null, global);
goog.exportSymbol('proto.io.UserType', null, global);
/**
 * @enum {number}
 */
proto.io.DeviceAttributes = {
  NOATTRIBUTES: 0,
  IOS: 1,
  ANDROID: 2,
  SUPPORTWALLET: 4,
  WALLETSCANNER: 8,
  WALLETDAEMON: 16,
  WALLETPASSES: 32,
  WINDOWS: 64,
  OSX: 128,
  LINUX: 256,
  MOBILE: 512,
  DESKTOP: 1024,
  TABLET: 2048,
  UNSUPPORTEDIOS: 4096
};

/**
 * @enum {number}
 */
proto.io.Channel = {
  UNKNOWNCHANNEL: 0,
  WEB: 1,
  API: 2,
  APP: 3
};

/**
 * @enum {number}
 */
proto.io.Authentication = {
  UNAUTHENTICATED: 0,
  WEBTOKEN: 1,
  BEARERTOKEN: 2,
  CERTIFICATE: 3
};

/**
 * @enum {number}
 */
proto.io.UserType = {
  UNKNOWNUSERTYPE: 0,
  USER: 1,
  TEAMMEMBER: 2
};

goog.object.extend(exports, proto.io);
