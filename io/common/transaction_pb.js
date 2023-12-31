// source: io/common/transaction.proto
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

var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
goog.object.extend(proto, io_common_common_objects_pb);
var io_common_proximity_pb = require('../../io/common/proximity_pb.js');
goog.object.extend(proto, io_common_proximity_pb);
goog.exportSymbol('proto.io.DiscountItem', null, global);
goog.exportSymbol('proto.io.OrderItem', null, global);
goog.exportSymbol('proto.io.Transaction', null, global);
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
proto.io.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.Transaction.repeatedFields_, null);
};
goog.inherits(proto.io.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.Transaction.displayName = 'proto.io.Transaction';
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
proto.io.DiscountItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.DiscountItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.DiscountItem.displayName = 'proto.io.DiscountItem';
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
proto.io.OrderItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.OrderItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.OrderItem.displayName = 'proto.io.OrderItem';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.Transaction.repeatedFields_ = [3,5];



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
proto.io.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.io.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    referenceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    totalprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    orderitemsList: jspb.Message.toObjectList(msg.getOrderitemsList(),
    proto.io.OrderItem.toObject, includeInstance),
    discount: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    discountitemsList: jspb.Message.toObjectList(msg.getDiscountitemsList(),
    proto.io.DiscountItem.toObject, includeInstance),
    servicecharge: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    totaltax: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    finalprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    roundingdifference: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    isrefunded: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    timestamp: (f = msg.getTimestamp()) && io_common_common_objects_pb.Date.toObject(includeInstance, f),
    currency: jspb.Message.getFieldWithDefault(msg, 12, ""),
    location: (f = msg.getLocation()) && io_common_proximity_pb.GPSLocation.toObject(includeInstance, f),
    transactionsource: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.io.Transaction}
 */
proto.io.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.Transaction;
  return proto.io.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.Transaction}
 */
proto.io.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTotalprice(value);
      break;
    case 3:
      var value = new proto.io.OrderItem;
      reader.readMessage(value,proto.io.OrderItem.deserializeBinaryFromReader);
      msg.addOrderitems(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDiscount(value);
      break;
    case 5:
      var value = new proto.io.DiscountItem;
      reader.readMessage(value,proto.io.DiscountItem.deserializeBinaryFromReader);
      msg.addDiscountitems(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setServicecharge(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTotaltax(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFinalprice(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRoundingdifference(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsrefunded(value);
      break;
    case 11:
      var value = new io_common_common_objects_pb.Date;
      reader.readMessage(value,io_common_common_objects_pb.Date.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 13:
      var value = new io_common_proximity_pb.GPSLocation;
      reader.readMessage(value,io_common_proximity_pb.GPSLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionsource(value);
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
proto.io.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReferenceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTotalprice();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getOrderitemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.io.OrderItem.serializeBinaryToWriter
    );
  }
  f = message.getDiscount();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getDiscountitemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.io.DiscountItem.serializeBinaryToWriter
    );
  }
  f = message.getServicecharge();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getTotaltax();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getFinalprice();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getRoundingdifference();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getIsrefunded();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      io_common_common_objects_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      io_common_proximity_pb.GPSLocation.serializeBinaryToWriter
    );
  }
  f = message.getTransactionsource();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string referenceId = 1;
 * @return {string}
 */
proto.io.Transaction.prototype.getReferenceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.setReferenceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float totalPrice = 2;
 * @return {number}
 */
proto.io.Transaction.prototype.getTotalprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.setTotalprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated OrderItem orderItems = 3;
 * @return {!Array<!proto.io.OrderItem>}
 */
proto.io.Transaction.prototype.getOrderitemsList = function() {
  return /** @type{!Array<!proto.io.OrderItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.OrderItem, 3));
};


/**
 * @param {!Array<!proto.io.OrderItem>} value
 * @return {!proto.io.Transaction} returns this
*/
proto.io.Transaction.prototype.setOrderitemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.io.OrderItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.OrderItem}
 */
proto.io.Transaction.prototype.addOrderitems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.io.OrderItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.clearOrderitemsList = function() {
  return this.setOrderitemsList([]);
};


/**
 * optional float discount = 4;
 * @return {number}
 */
proto.io.Transaction.prototype.getDiscount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.setDiscount = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated DiscountItem discountItems = 5;
 * @return {!Array<!proto.io.DiscountItem>}
 */
proto.io.Transaction.prototype.getDiscountitemsList = function() {
  return /** @type{!Array<!proto.io.DiscountItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.DiscountItem, 5));
};


/**
 * @param {!Array<!proto.io.DiscountItem>} value
 * @return {!proto.io.Transaction} returns this
*/
proto.io.Transaction.prototype.setDiscountitemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.io.DiscountItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.DiscountItem}
 */
proto.io.Transaction.prototype.addDiscountitems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.io.DiscountItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.clearDiscountitemsList = function() {
  return this.setDiscountitemsList([]);
};


/**
 * optional float serviceCharge = 6;
 * @return {number}
 */
proto.io.Transaction.prototype.getServicecharge = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.setServicecharge = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float totalTax = 7;
 * @return {number}
 */
proto.io.Transaction.prototype.getTotaltax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.setTotaltax = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float finalPrice = 8;
 * @return {number}
 */
proto.io.Transaction.prototype.getFinalprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.setFinalprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float roundingDifference = 9;
 * @return {number}
 */
proto.io.Transaction.prototype.getRoundingdifference = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.setRoundingdifference = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional bool isRefunded = 10;
 * @return {boolean}
 */
proto.io.Transaction.prototype.getIsrefunded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.setIsrefunded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional Date timestamp = 11;
 * @return {?proto.io.Date}
 */
proto.io.Transaction.prototype.getTimestamp = function() {
  return /** @type{?proto.io.Date} */ (
    jspb.Message.getWrapperField(this, io_common_common_objects_pb.Date, 11));
};


/**
 * @param {?proto.io.Date|undefined} value
 * @return {!proto.io.Transaction} returns this
*/
proto.io.Transaction.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.Transaction.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string currency = 12;
 * @return {string}
 */
proto.io.Transaction.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional GPSLocation location = 13;
 * @return {?proto.io.GPSLocation}
 */
proto.io.Transaction.prototype.getLocation = function() {
  return /** @type{?proto.io.GPSLocation} */ (
    jspb.Message.getWrapperField(this, io_common_proximity_pb.GPSLocation, 13));
};


/**
 * @param {?proto.io.GPSLocation|undefined} value
 * @return {!proto.io.Transaction} returns this
*/
proto.io.Transaction.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.Transaction.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string transactionSource = 14;
 * @return {string}
 */
proto.io.Transaction.prototype.getTransactionsource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.Transaction} returns this
 */
proto.io.Transaction.prototype.setTransactionsource = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
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
proto.io.DiscountItem.prototype.toObject = function(opt_includeInstance) {
  return proto.io.DiscountItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.DiscountItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.DiscountItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    discountcode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    vouchercode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    itemname: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.io.DiscountItem}
 */
proto.io.DiscountItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.DiscountItem;
  return proto.io.DiscountItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.DiscountItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.DiscountItem}
 */
proto.io.DiscountItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiscountcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVouchercode(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAmount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemname(value);
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
proto.io.DiscountItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.DiscountItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.DiscountItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.DiscountItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiscountcode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVouchercode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getItemname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string discountCode = 1;
 * @return {string}
 */
proto.io.DiscountItem.prototype.getDiscountcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.DiscountItem} returns this
 */
proto.io.DiscountItem.prototype.setDiscountcode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string voucherCode = 2;
 * @return {string}
 */
proto.io.DiscountItem.prototype.getVouchercode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.DiscountItem} returns this
 */
proto.io.DiscountItem.prototype.setVouchercode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float amount = 4;
 * @return {number}
 */
proto.io.DiscountItem.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.DiscountItem} returns this
 */
proto.io.DiscountItem.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string itemName = 5;
 * @return {string}
 */
proto.io.DiscountItem.prototype.getItemname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.DiscountItem} returns this
 */
proto.io.DiscountItem.prototype.setItemname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.io.OrderItem.prototype.toObject = function(opt_includeInstance) {
  return proto.io.OrderItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.OrderItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.OrderItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    tax: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    itemname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 4, 0),
    sku: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.io.OrderItem}
 */
proto.io.OrderItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.OrderItem;
  return proto.io.OrderItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.OrderItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.OrderItem}
 */
proto.io.OrderItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTax(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSku(value);
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
proto.io.OrderItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.OrderItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.OrderItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.OrderItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getTax();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getItemname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSku();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional float amount = 1;
 * @return {number}
 */
proto.io.OrderItem.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.OrderItem} returns this
 */
proto.io.OrderItem.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float tax = 2;
 * @return {number}
 */
proto.io.OrderItem.prototype.getTax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.OrderItem} returns this
 */
proto.io.OrderItem.prototype.setTax = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string itemName = 3;
 * @return {string}
 */
proto.io.OrderItem.prototype.getItemname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.OrderItem} returns this
 */
proto.io.OrderItem.prototype.setItemname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 quantity = 4;
 * @return {number}
 */
proto.io.OrderItem.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.OrderItem} returns this
 */
proto.io.OrderItem.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string sku = 5;
 * @return {string}
 */
proto.io.OrderItem.prototype.getSku = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.OrderItem} returns this
 */
proto.io.OrderItem.prototype.setSku = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.io);
