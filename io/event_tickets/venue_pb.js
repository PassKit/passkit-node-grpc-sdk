// source: io/event_tickets/venue.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var io_common_localization_pb = require('../../io/common/localization_pb.js');
goog.object.extend(proto, io_common_localization_pb);
var io_common_proximity_pb = require('../../io/common/proximity_pb.js');
goog.object.extend(proto, io_common_proximity_pb);
goog.exportSymbol('proto.event_tickets.Venue', null, global);
goog.exportSymbol('proto.event_tickets.VenueLimitedFieldsResponse', null, global);
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
proto.event_tickets.Venue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.event_tickets.Venue.repeatedFields_, null);
};
goog.inherits(proto.event_tickets.Venue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_tickets.Venue.displayName = 'proto.event_tickets.Venue';
}
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
proto.event_tickets.VenueLimitedFieldsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_tickets.VenueLimitedFieldsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_tickets.VenueLimitedFieldsResponse.displayName = 'proto.event_tickets.VenueLimitedFieldsResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.event_tickets.Venue.repeatedFields_ = [8];



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
proto.event_tickets.Venue.prototype.toObject = function(opt_includeInstance) {
  return proto.event_tickets.Venue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_tickets.Venue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_tickets.Venue.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    localizedname: (f = msg.getLocalizedname()) && io_common_localization_pb.LocalizedString.toObject(includeInstance, f),
    address: jspb.Message.getFieldWithDefault(msg, 5, ""),
    localizedaddress: (f = msg.getLocalizedaddress()) && io_common_localization_pb.LocalizedString.toObject(includeInstance, f),
    timezone: jspb.Message.getFieldWithDefault(msg, 7, ""),
    gpscoordsList: jspb.Message.toObjectList(msg.getGpscoordsList(),
    io_common_proximity_pb.GPSLocation.toObject, includeInstance),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updated: (f = msg.getUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.event_tickets.Venue}
 */
proto.event_tickets.Venue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_tickets.Venue;
  return proto.event_tickets.Venue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_tickets.Venue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_tickets.Venue}
 */
proto.event_tickets.Venue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new io_common_localization_pb.LocalizedString;
      reader.readMessage(value,io_common_localization_pb.LocalizedString.deserializeBinaryFromReader);
      msg.setLocalizedname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 6:
      var value = new io_common_localization_pb.LocalizedString;
      reader.readMessage(value,io_common_localization_pb.LocalizedString.deserializeBinaryFromReader);
      msg.setLocalizedaddress(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 8:
      var value = new io_common_proximity_pb.GPSLocation;
      reader.readMessage(value,io_common_proximity_pb.GPSLocation.deserializeBinaryFromReader);
      msg.addGpscoords(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdated(value);
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
proto.event_tickets.Venue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_tickets.Venue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_tickets.Venue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_tickets.Venue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLocalizedname();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      io_common_localization_pb.LocalizedString.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocalizedaddress();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      io_common_localization_pb.LocalizedString.serializeBinaryToWriter
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getGpscoordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      io_common_proximity_pb.GPSLocation.serializeBinaryToWriter
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdated();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.event_tickets.Venue.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_tickets.Venue} returns this
 */
proto.event_tickets.Venue.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uid = 2;
 * @return {string}
 */
proto.event_tickets.Venue.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_tickets.Venue} returns this
 */
proto.event_tickets.Venue.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.event_tickets.Venue.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_tickets.Venue} returns this
 */
proto.event_tickets.Venue.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional io.LocalizedString localizedName = 4;
 * @return {?proto.io.LocalizedString}
 */
proto.event_tickets.Venue.prototype.getLocalizedname = function() {
  return /** @type{?proto.io.LocalizedString} */ (
    jspb.Message.getWrapperField(this, io_common_localization_pb.LocalizedString, 4));
};


/**
 * @param {?proto.io.LocalizedString|undefined} value
 * @return {!proto.event_tickets.Venue} returns this
*/
proto.event_tickets.Venue.prototype.setLocalizedname = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_tickets.Venue} returns this
 */
proto.event_tickets.Venue.prototype.clearLocalizedname = function() {
  return this.setLocalizedname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_tickets.Venue.prototype.hasLocalizedname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string address = 5;
 * @return {string}
 */
proto.event_tickets.Venue.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_tickets.Venue} returns this
 */
proto.event_tickets.Venue.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional io.LocalizedString localizedAddress = 6;
 * @return {?proto.io.LocalizedString}
 */
proto.event_tickets.Venue.prototype.getLocalizedaddress = function() {
  return /** @type{?proto.io.LocalizedString} */ (
    jspb.Message.getWrapperField(this, io_common_localization_pb.LocalizedString, 6));
};


/**
 * @param {?proto.io.LocalizedString|undefined} value
 * @return {!proto.event_tickets.Venue} returns this
*/
proto.event_tickets.Venue.prototype.setLocalizedaddress = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_tickets.Venue} returns this
 */
proto.event_tickets.Venue.prototype.clearLocalizedaddress = function() {
  return this.setLocalizedaddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_tickets.Venue.prototype.hasLocalizedaddress = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string timezone = 7;
 * @return {string}
 */
proto.event_tickets.Venue.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_tickets.Venue} returns this
 */
proto.event_tickets.Venue.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated io.GPSLocation gpsCoords = 8;
 * @return {!Array<!proto.io.GPSLocation>}
 */
proto.event_tickets.Venue.prototype.getGpscoordsList = function() {
  return /** @type{!Array<!proto.io.GPSLocation>} */ (
    jspb.Message.getRepeatedWrapperField(this, io_common_proximity_pb.GPSLocation, 8));
};


/**
 * @param {!Array<!proto.io.GPSLocation>} value
 * @return {!proto.event_tickets.Venue} returns this
*/
proto.event_tickets.Venue.prototype.setGpscoordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.io.GPSLocation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.GPSLocation}
 */
proto.event_tickets.Venue.prototype.addGpscoords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.io.GPSLocation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.event_tickets.Venue} returns this
 */
proto.event_tickets.Venue.prototype.clearGpscoordsList = function() {
  return this.setGpscoordsList([]);
};


/**
 * optional google.protobuf.Timestamp created = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.event_tickets.Venue.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.event_tickets.Venue} returns this
*/
proto.event_tickets.Venue.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_tickets.Venue} returns this
 */
proto.event_tickets.Venue.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_tickets.Venue.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp updated = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.event_tickets.Venue.prototype.getUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.event_tickets.Venue} returns this
*/
proto.event_tickets.Venue.prototype.setUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_tickets.Venue} returns this
 */
proto.event_tickets.Venue.prototype.clearUpdated = function() {
  return this.setUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_tickets.Venue.prototype.hasUpdated = function() {
  return jspb.Message.getField(this, 10) != null;
};





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
proto.event_tickets.VenueLimitedFieldsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.event_tickets.VenueLimitedFieldsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_tickets.VenueLimitedFieldsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_tickets.VenueLimitedFieldsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.event_tickets.VenueLimitedFieldsResponse}
 */
proto.event_tickets.VenueLimitedFieldsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_tickets.VenueLimitedFieldsResponse;
  return proto.event_tickets.VenueLimitedFieldsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_tickets.VenueLimitedFieldsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_tickets.VenueLimitedFieldsResponse}
 */
proto.event_tickets.VenueLimitedFieldsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.event_tickets.VenueLimitedFieldsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_tickets.VenueLimitedFieldsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_tickets.VenueLimitedFieldsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_tickets.VenueLimitedFieldsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.event_tickets.VenueLimitedFieldsResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_tickets.VenueLimitedFieldsResponse} returns this
 */
proto.event_tickets.VenueLimitedFieldsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uid = 2;
 * @return {string}
 */
proto.event_tickets.VenueLimitedFieldsResponse.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_tickets.VenueLimitedFieldsResponse} returns this
 */
proto.event_tickets.VenueLimitedFieldsResponse.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.event_tickets.VenueLimitedFieldsResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_tickets.VenueLimitedFieldsResponse} returns this
 */
proto.event_tickets.VenueLimitedFieldsResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.event_tickets);