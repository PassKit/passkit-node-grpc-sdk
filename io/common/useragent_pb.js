// source: io/common/useragent.proto
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

goog.exportSymbol('proto.io.UserAgent', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.UserAgent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.UserAgent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.UserAgent.displayName = 'proto.io.UserAgent';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.UserAgent.prototype.toObject = function(opt_includeInstance) {
  return proto.io.UserAgent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.UserAgent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.UserAgent.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getFieldWithDefault(msg, 1, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 2, ""),
    os: jspb.Message.getFieldWithDefault(msg, 3, ""),
    osversion: jspb.Message.getFieldWithDefault(msg, 4, ""),
    engine: jspb.Message.getFieldWithDefault(msg, 5, ""),
    engineversion: jspb.Message.getFieldWithDefault(msg, 6, ""),
    browser: jspb.Message.getFieldWithDefault(msg, 7, ""),
    browserversion: jspb.Message.getFieldWithDefault(msg, 8, ""),
    localization: jspb.Message.getFieldWithDefault(msg, 9, ""),
    mobile: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    walletcompatible: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.UserAgent}
 */
proto.io.UserAgent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.UserAgent;
  return proto.io.UserAgent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.UserAgent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.UserAgent}
 */
proto.io.UserAgent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRaw(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOsversion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEngine(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEngineversion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrowser(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrowserversion(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalization(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMobile(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWalletcompatible(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.UserAgent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.UserAgent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.UserAgent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.UserAgent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOsversion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEngine();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEngineversion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBrowser();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBrowserversion();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLocalization();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMobile();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getWalletcompatible();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional string raw = 1;
 * @return {string}
 */
proto.io.UserAgent.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.UserAgent} returns this
 */
proto.io.UserAgent.prototype.setRaw = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string platform = 2;
 * @return {string}
 */
proto.io.UserAgent.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.UserAgent} returns this
 */
proto.io.UserAgent.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string os = 3;
 * @return {string}
 */
proto.io.UserAgent.prototype.getOs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.UserAgent} returns this
 */
proto.io.UserAgent.prototype.setOs = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string osVersion = 4;
 * @return {string}
 */
proto.io.UserAgent.prototype.getOsversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.UserAgent} returns this
 */
proto.io.UserAgent.prototype.setOsversion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string engine = 5;
 * @return {string}
 */
proto.io.UserAgent.prototype.getEngine = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.UserAgent} returns this
 */
proto.io.UserAgent.prototype.setEngine = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string engineVersion = 6;
 * @return {string}
 */
proto.io.UserAgent.prototype.getEngineversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.UserAgent} returns this
 */
proto.io.UserAgent.prototype.setEngineversion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string browser = 7;
 * @return {string}
 */
proto.io.UserAgent.prototype.getBrowser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.UserAgent} returns this
 */
proto.io.UserAgent.prototype.setBrowser = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string browserVersion = 8;
 * @return {string}
 */
proto.io.UserAgent.prototype.getBrowserversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.UserAgent} returns this
 */
proto.io.UserAgent.prototype.setBrowserversion = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string localization = 9;
 * @return {string}
 */
proto.io.UserAgent.prototype.getLocalization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.UserAgent} returns this
 */
proto.io.UserAgent.prototype.setLocalization = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool mobile = 10;
 * @return {boolean}
 */
proto.io.UserAgent.prototype.getMobile = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.UserAgent} returns this
 */
proto.io.UserAgent.prototype.setMobile = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool walletCompatible = 11;
 * @return {boolean}
 */
proto.io.UserAgent.prototype.getWalletcompatible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.UserAgent} returns this
 */
proto.io.UserAgent.prototype.setWalletcompatible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


goog.object.extend(exports, proto.io);
