// source: io/common/pagination.proto
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

goog.exportSymbol('proto.io.Filter', null, global);
goog.exportSymbol('proto.io.Pagination', null, global);
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
proto.io.Pagination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.Pagination.repeatedFields_, null);
};
goog.inherits(proto.io.Pagination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.Pagination.displayName = 'proto.io.Pagination';
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
proto.io.Filter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.Filter.repeatedFields_, null);
};
goog.inherits(proto.io.Filter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.Filter.displayName = 'proto.io.Filter';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.Pagination.repeatedFields_ = [3,4,5];



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
proto.io.Pagination.prototype.toObject = function(opt_includeInstance) {
  return proto.io.Pagination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.Pagination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.Pagination.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    filterfieldList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    filtervalueList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    filteroperatorList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    orderby: jspb.Message.getFieldWithDefault(msg, 6, ""),
    orderasc: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.io.Pagination}
 */
proto.io.Pagination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.Pagination;
  return proto.io.Pagination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.Pagination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.Pagination}
 */
proto.io.Pagination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterfield(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addFiltervalue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilteroperator(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderby(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOrderasc(value);
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
proto.io.Pagination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.Pagination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.Pagination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.Pagination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFilterfieldList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getFiltervalueList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getFilteroperatorList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getOrderby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOrderasc();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional int32 limit = 1;
 * @return {number}
 */
proto.io.Pagination.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.Pagination} returns this
 */
proto.io.Pagination.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 offset = 2;
 * @return {number}
 */
proto.io.Pagination.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.Pagination} returns this
 */
proto.io.Pagination.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated string filterField = 3;
 * @return {!Array<string>}
 */
proto.io.Pagination.prototype.getFilterfieldList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.io.Pagination} returns this
 */
proto.io.Pagination.prototype.setFilterfieldList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.io.Pagination} returns this
 */
proto.io.Pagination.prototype.addFilterfield = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.Pagination} returns this
 */
proto.io.Pagination.prototype.clearFilterfieldList = function() {
  return this.setFilterfieldList([]);
};


/**
 * repeated string filterValue = 4;
 * @return {!Array<string>}
 */
proto.io.Pagination.prototype.getFiltervalueList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.io.Pagination} returns this
 */
proto.io.Pagination.prototype.setFiltervalueList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.io.Pagination} returns this
 */
proto.io.Pagination.prototype.addFiltervalue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.Pagination} returns this
 */
proto.io.Pagination.prototype.clearFiltervalueList = function() {
  return this.setFiltervalueList([]);
};


/**
 * repeated string filterOperator = 5;
 * @return {!Array<string>}
 */
proto.io.Pagination.prototype.getFilteroperatorList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.io.Pagination} returns this
 */
proto.io.Pagination.prototype.setFilteroperatorList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.io.Pagination} returns this
 */
proto.io.Pagination.prototype.addFilteroperator = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.Pagination} returns this
 */
proto.io.Pagination.prototype.clearFilteroperatorList = function() {
  return this.setFilteroperatorList([]);
};


/**
 * optional string orderBy = 6;
 * @return {string}
 */
proto.io.Pagination.prototype.getOrderby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.Pagination} returns this
 */
proto.io.Pagination.prototype.setOrderby = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool orderAsc = 7;
 * @return {boolean}
 */
proto.io.Pagination.prototype.getOrderasc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.Pagination} returns this
 */
proto.io.Pagination.prototype.setOrderasc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.Filter.repeatedFields_ = [1,2,3];



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
proto.io.Filter.prototype.toObject = function(opt_includeInstance) {
  return proto.io.Filter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.Filter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.Filter.toObject = function(includeInstance, msg) {
  var f, obj = {
    filterfieldList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    filtervalueList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    filteroperatorList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.io.Filter}
 */
proto.io.Filter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.Filter;
  return proto.io.Filter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.Filter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.Filter}
 */
proto.io.Filter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterfield(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFiltervalue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilteroperator(value);
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
proto.io.Filter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.Filter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.Filter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.Filter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilterfieldList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getFiltervalueList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFilteroperatorList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated string filterField = 1;
 * @return {!Array<string>}
 */
proto.io.Filter.prototype.getFilterfieldList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.io.Filter} returns this
 */
proto.io.Filter.prototype.setFilterfieldList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.io.Filter} returns this
 */
proto.io.Filter.prototype.addFilterfield = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.Filter} returns this
 */
proto.io.Filter.prototype.clearFilterfieldList = function() {
  return this.setFilterfieldList([]);
};


/**
 * repeated string filterValue = 2;
 * @return {!Array<string>}
 */
proto.io.Filter.prototype.getFiltervalueList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.io.Filter} returns this
 */
proto.io.Filter.prototype.setFiltervalueList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.io.Filter} returns this
 */
proto.io.Filter.prototype.addFiltervalue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.Filter} returns this
 */
proto.io.Filter.prototype.clearFiltervalueList = function() {
  return this.setFiltervalueList([]);
};


/**
 * repeated string filterOperator = 3;
 * @return {!Array<string>}
 */
proto.io.Filter.prototype.getFilteroperatorList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.io.Filter} returns this
 */
proto.io.Filter.prototype.setFilteroperatorList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.io.Filter} returns this
 */
proto.io.Filter.prototype.addFilteroperator = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.Filter} returns this
 */
proto.io.Filter.prototype.clearFilteroperatorList = function() {
  return this.setFilteroperatorList([]);
};


goog.object.extend(exports, proto.io);
