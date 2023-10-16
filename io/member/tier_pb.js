// source: io/member/tier.proto
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
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
goog.object.extend(proto, io_common_common_objects_pb);
var io_common_expiry_pb = require('../../io/common/expiry_pb.js');
goog.object.extend(proto, io_common_expiry_pb);
goog.exportSymbol('proto.members.Tier', null, global);
goog.exportSymbol('proto.members.TierRequestInput', null, global);
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
proto.members.Tier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.members.Tier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.members.Tier.displayName = 'proto.members.Tier';
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
proto.members.TierRequestInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.members.TierRequestInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.members.TierRequestInput.displayName = 'proto.members.TierRequestInput';
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
proto.members.Tier.prototype.toObject = function(opt_includeInstance) {
  return proto.members.Tier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.members.Tier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.members.Tier.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tierindex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    localizedname: (f = msg.getLocalizedname()) && io_common_localization_pb.LocalizedString.toObject(includeInstance, f),
    secondarytiername: jspb.Message.getFieldWithDefault(msg, 5, ""),
    localizedsecondarytiername: (f = msg.getLocalizedsecondarytiername()) && io_common_localization_pb.LocalizedString.toObject(includeInstance, f),
    programid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    passtemplateid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    tierupgrademessage: jspb.Message.getFieldWithDefault(msg, 9, ""),
    localizedtierupgrademessage: (f = msg.getLocalizedtierupgrademessage()) && io_common_localization_pb.LocalizedString.toObject(includeInstance, f),
    tierdowngrademessage: jspb.Message.getFieldWithDefault(msg, 11, ""),
    localizedtierdowngrademessage: (f = msg.getLocalizedtierdowngrademessage()) && io_common_localization_pb.LocalizedString.toObject(includeInstance, f),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updated: (f = msg.getUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    pointsoverdrawn: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    secondarypointsoverdrawn: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    expirysettings: (f = msg.getExpirysettings()) && io_common_expiry_pb.ExpirySettings.toObject(includeInstance, f),
    timezone: jspb.Message.getFieldWithDefault(msg, 18, ""),
    allowtierenrolment: (f = msg.getAllowtierenrolment()) && io_common_common_objects_pb.PkBool.toObject(includeInstance, f),
    shortcode: jspb.Message.getFieldWithDefault(msg, 20, "")
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
 * @return {!proto.members.Tier}
 */
proto.members.Tier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.members.Tier;
  return proto.members.Tier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.members.Tier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.members.Tier}
 */
proto.members.Tier.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTierindex(value);
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
      msg.setSecondarytiername(value);
      break;
    case 6:
      var value = new io_common_localization_pb.LocalizedString;
      reader.readMessage(value,io_common_localization_pb.LocalizedString.deserializeBinaryFromReader);
      msg.setLocalizedsecondarytiername(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setProgramid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasstemplateid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTierupgrademessage(value);
      break;
    case 10:
      var value = new io_common_localization_pb.LocalizedString;
      reader.readMessage(value,io_common_localization_pb.LocalizedString.deserializeBinaryFromReader);
      msg.setLocalizedtierupgrademessage(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTierdowngrademessage(value);
      break;
    case 12:
      var value = new io_common_localization_pb.LocalizedString;
      reader.readMessage(value,io_common_localization_pb.LocalizedString.deserializeBinaryFromReader);
      msg.setLocalizedtierdowngrademessage(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdated(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPointsoverdrawn(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSecondarypointsoverdrawn(value);
      break;
    case 17:
      var value = new io_common_expiry_pb.ExpirySettings;
      reader.readMessage(value,io_common_expiry_pb.ExpirySettings.deserializeBinaryFromReader);
      msg.setExpirysettings(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 19:
      var value = new io_common_common_objects_pb.PkBool;
      reader.readMessage(value,io_common_common_objects_pb.PkBool.deserializeBinaryFromReader);
      msg.setAllowtierenrolment(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortcode(value);
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
proto.members.Tier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.members.Tier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.members.Tier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.members.Tier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTierindex();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getSecondarytiername();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocalizedsecondarytiername();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      io_common_localization_pb.LocalizedString.serializeBinaryToWriter
    );
  }
  f = message.getProgramid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPasstemplateid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTierupgrademessage();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLocalizedtierupgrademessage();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      io_common_localization_pb.LocalizedString.serializeBinaryToWriter
    );
  }
  f = message.getTierdowngrademessage();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLocalizedtierdowngrademessage();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      io_common_localization_pb.LocalizedString.serializeBinaryToWriter
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdated();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPointsoverdrawn();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getSecondarypointsoverdrawn();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getExpirysettings();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      io_common_expiry_pb.ExpirySettings.serializeBinaryToWriter
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getAllowtierenrolment();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      io_common_common_objects_pb.PkBool.serializeBinaryToWriter
    );
  }
  f = message.getShortcode();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.members.Tier.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 tierIndex = 2;
 * @return {number}
 */
proto.members.Tier.prototype.getTierindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.setTierindex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.members.Tier.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional io.LocalizedString localizedName = 4;
 * @return {?proto.io.LocalizedString}
 */
proto.members.Tier.prototype.getLocalizedname = function() {
  return /** @type{?proto.io.LocalizedString} */ (
    jspb.Message.getWrapperField(this, io_common_localization_pb.LocalizedString, 4));
};


/**
 * @param {?proto.io.LocalizedString|undefined} value
 * @return {!proto.members.Tier} returns this
*/
proto.members.Tier.prototype.setLocalizedname = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.clearLocalizedname = function() {
  return this.setLocalizedname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.members.Tier.prototype.hasLocalizedname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string secondaryTierName = 5;
 * @return {string}
 */
proto.members.Tier.prototype.getSecondarytiername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.setSecondarytiername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional io.LocalizedString localizedSecondaryTierName = 6;
 * @return {?proto.io.LocalizedString}
 */
proto.members.Tier.prototype.getLocalizedsecondarytiername = function() {
  return /** @type{?proto.io.LocalizedString} */ (
    jspb.Message.getWrapperField(this, io_common_localization_pb.LocalizedString, 6));
};


/**
 * @param {?proto.io.LocalizedString|undefined} value
 * @return {!proto.members.Tier} returns this
*/
proto.members.Tier.prototype.setLocalizedsecondarytiername = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.clearLocalizedsecondarytiername = function() {
  return this.setLocalizedsecondarytiername(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.members.Tier.prototype.hasLocalizedsecondarytiername = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string programId = 7;
 * @return {string}
 */
proto.members.Tier.prototype.getProgramid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.setProgramid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string passTemplateId = 8;
 * @return {string}
 */
proto.members.Tier.prototype.getPasstemplateid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.setPasstemplateid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string tierUpgradeMessage = 9;
 * @return {string}
 */
proto.members.Tier.prototype.getTierupgrademessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.setTierupgrademessage = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional io.LocalizedString localizedTierUpgradeMessage = 10;
 * @return {?proto.io.LocalizedString}
 */
proto.members.Tier.prototype.getLocalizedtierupgrademessage = function() {
  return /** @type{?proto.io.LocalizedString} */ (
    jspb.Message.getWrapperField(this, io_common_localization_pb.LocalizedString, 10));
};


/**
 * @param {?proto.io.LocalizedString|undefined} value
 * @return {!proto.members.Tier} returns this
*/
proto.members.Tier.prototype.setLocalizedtierupgrademessage = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.clearLocalizedtierupgrademessage = function() {
  return this.setLocalizedtierupgrademessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.members.Tier.prototype.hasLocalizedtierupgrademessage = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string tierDowngradeMessage = 11;
 * @return {string}
 */
proto.members.Tier.prototype.getTierdowngrademessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.setTierdowngrademessage = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional io.LocalizedString localizedTierDowngradeMessage = 12;
 * @return {?proto.io.LocalizedString}
 */
proto.members.Tier.prototype.getLocalizedtierdowngrademessage = function() {
  return /** @type{?proto.io.LocalizedString} */ (
    jspb.Message.getWrapperField(this, io_common_localization_pb.LocalizedString, 12));
};


/**
 * @param {?proto.io.LocalizedString|undefined} value
 * @return {!proto.members.Tier} returns this
*/
proto.members.Tier.prototype.setLocalizedtierdowngrademessage = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.clearLocalizedtierdowngrademessage = function() {
  return this.setLocalizedtierdowngrademessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.members.Tier.prototype.hasLocalizedtierdowngrademessage = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp created = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.members.Tier.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.members.Tier} returns this
*/
proto.members.Tier.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.members.Tier.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Timestamp updated = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.members.Tier.prototype.getUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.members.Tier} returns this
*/
proto.members.Tier.prototype.setUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.clearUpdated = function() {
  return this.setUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.members.Tier.prototype.hasUpdated = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool pointsOverdrawn = 15;
 * @return {boolean}
 */
proto.members.Tier.prototype.getPointsoverdrawn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.setPointsoverdrawn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional bool secondaryPointsOverdrawn = 16;
 * @return {boolean}
 */
proto.members.Tier.prototype.getSecondarypointsoverdrawn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.setSecondarypointsoverdrawn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional io.ExpirySettings expirySettings = 17;
 * @return {?proto.io.ExpirySettings}
 */
proto.members.Tier.prototype.getExpirysettings = function() {
  return /** @type{?proto.io.ExpirySettings} */ (
    jspb.Message.getWrapperField(this, io_common_expiry_pb.ExpirySettings, 17));
};


/**
 * @param {?proto.io.ExpirySettings|undefined} value
 * @return {!proto.members.Tier} returns this
*/
proto.members.Tier.prototype.setExpirysettings = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.clearExpirysettings = function() {
  return this.setExpirysettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.members.Tier.prototype.hasExpirysettings = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string timezone = 18;
 * @return {string}
 */
proto.members.Tier.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional io.PkBool allowTierEnrolment = 19;
 * @return {?proto.io.PkBool}
 */
proto.members.Tier.prototype.getAllowtierenrolment = function() {
  return /** @type{?proto.io.PkBool} */ (
    jspb.Message.getWrapperField(this, io_common_common_objects_pb.PkBool, 19));
};


/**
 * @param {?proto.io.PkBool|undefined} value
 * @return {!proto.members.Tier} returns this
*/
proto.members.Tier.prototype.setAllowtierenrolment = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.clearAllowtierenrolment = function() {
  return this.setAllowtierenrolment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.members.Tier.prototype.hasAllowtierenrolment = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional string shortCode = 20;
 * @return {string}
 */
proto.members.Tier.prototype.getShortcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.members.Tier} returns this
 */
proto.members.Tier.prototype.setShortcode = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
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
proto.members.TierRequestInput.prototype.toObject = function(opt_includeInstance) {
  return proto.members.TierRequestInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.members.TierRequestInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.members.TierRequestInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    programid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tierid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.members.TierRequestInput}
 */
proto.members.TierRequestInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.members.TierRequestInput;
  return proto.members.TierRequestInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.members.TierRequestInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.members.TierRequestInput}
 */
proto.members.TierRequestInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProgramid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTierid(value);
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
proto.members.TierRequestInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.members.TierRequestInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.members.TierRequestInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.members.TierRequestInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgramid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTierid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string programId = 1;
 * @return {string}
 */
proto.members.TierRequestInput.prototype.getProgramid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.members.TierRequestInput} returns this
 */
proto.members.TierRequestInput.prototype.setProgramid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tierId = 2;
 * @return {string}
 */
proto.members.TierRequestInput.prototype.getTierid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.members.TierRequestInput} returns this
 */
proto.members.TierRequestInput.prototype.setTierid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.members);