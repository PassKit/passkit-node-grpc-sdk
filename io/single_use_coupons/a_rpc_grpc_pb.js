// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// Single Use Coupon Protocol is suit for cases where the user requires a clean and simple single use coupon for short term coupon campaigns in Apple Wallet and Google Pay.
'use strict';
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
var io_common_pagination_pb = require('../../io/common/pagination_pb.js');
var io_common_filter_pb = require('../../io/common/filter_pb.js');
var io_common_reporting_pb = require('../../io/common/reporting_pb.js');
var io_common_personal_pb = require('../../io/common/personal_pb.js');
var io_single_use_coupons_campaign_pb = require('../../io/single_use_coupons/campaign_pb.js');
var io_single_use_coupons_offer_pb = require('../../io/single_use_coupons/offer_pb.js');
var io_single_use_coupons_coupon_pb = require('../../io/single_use_coupons/coupon_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_AnalyticsRequest(arg) {
  if (!(arg instanceof io_common_reporting_pb.AnalyticsRequest)) {
    throw new Error('Expected argument of type io.AnalyticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_AnalyticsRequest(buffer_arg) {
  return io_common_reporting_pb.AnalyticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Count(arg) {
  if (!(arg instanceof io_common_common_objects_pb.Count)) {
    throw new Error('Expected argument of type io.Count');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Count(buffer_arg) {
  return io_common_common_objects_pb.Count.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Filters(arg) {
  if (!(arg instanceof io_common_filter_pb.Filters)) {
    throw new Error('Expected argument of type io.Filters');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Filters(buffer_arg) {
  return io_common_filter_pb.Filters.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_Pagination(arg) {
  if (!(arg instanceof io_common_pagination_pb.Pagination)) {
    throw new Error('Expected argument of type io.Pagination');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Pagination(buffer_arg) {
  return io_common_pagination_pb.Pagination.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_PersonRequest(arg) {
  if (!(arg instanceof io_common_personal_pb.PersonRequest)) {
    throw new Error('Expected argument of type io.PersonRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_PersonRequest(buffer_arg) {
  return io_common_personal_pb.PersonRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Strings(arg) {
  if (!(arg instanceof io_common_common_objects_pb.Strings)) {
    throw new Error('Expected argument of type io.Strings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Strings(buffer_arg) {
  return io_common_common_objects_pb.Strings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_single_use_coupons_CampaignCopyRequest(arg) {
  if (!(arg instanceof io_single_use_coupons_campaign_pb.CampaignCopyRequest)) {
    throw new Error('Expected argument of type single_use_coupons.CampaignCopyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_single_use_coupons_CampaignCopyRequest(buffer_arg) {
  return io_single_use_coupons_campaign_pb.CampaignCopyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_single_use_coupons_Coupon(arg) {
  if (!(arg instanceof io_single_use_coupons_coupon_pb.Coupon)) {
    throw new Error('Expected argument of type single_use_coupons.Coupon');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_single_use_coupons_Coupon(buffer_arg) {
  return io_single_use_coupons_coupon_pb.Coupon.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_single_use_coupons_CouponCampaign(arg) {
  if (!(arg instanceof io_single_use_coupons_campaign_pb.CouponCampaign)) {
    throw new Error('Expected argument of type single_use_coupons.CouponCampaign');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_single_use_coupons_CouponCampaign(buffer_arg) {
  return io_single_use_coupons_campaign_pb.CouponCampaign.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_single_use_coupons_CouponCampaignAnalyticsResponse(arg) {
  if (!(arg instanceof io_single_use_coupons_campaign_pb.CouponCampaignAnalyticsResponse)) {
    throw new Error('Expected argument of type single_use_coupons.CouponCampaignAnalyticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_single_use_coupons_CouponCampaignAnalyticsResponse(buffer_arg) {
  return io_single_use_coupons_campaign_pb.CouponCampaignAnalyticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_single_use_coupons_CouponNewExternalIdRequest(arg) {
  if (!(arg instanceof io_single_use_coupons_coupon_pb.CouponNewExternalIdRequest)) {
    throw new Error('Expected argument of type single_use_coupons.CouponNewExternalIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_single_use_coupons_CouponNewExternalIdRequest(buffer_arg) {
  return io_single_use_coupons_coupon_pb.CouponNewExternalIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_single_use_coupons_CouponOffer(arg) {
  if (!(arg instanceof io_single_use_coupons_offer_pb.CouponOffer)) {
    throw new Error('Expected argument of type single_use_coupons.CouponOffer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_single_use_coupons_CouponOffer(buffer_arg) {
  return io_single_use_coupons_offer_pb.CouponOffer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_single_use_coupons_CouponOffersListRequest(arg) {
  if (!(arg instanceof io_single_use_coupons_offer_pb.CouponOffersListRequest)) {
    throw new Error('Expected argument of type single_use_coupons.CouponOffersListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_single_use_coupons_CouponOffersListRequest(buffer_arg) {
  return io_single_use_coupons_offer_pb.CouponOffersListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_single_use_coupons_CouponOffersListRequestDeprecated(arg) {
  if (!(arg instanceof io_single_use_coupons_offer_pb.CouponOffersListRequestDeprecated)) {
    throw new Error('Expected argument of type single_use_coupons.CouponOffersListRequestDeprecated');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_single_use_coupons_CouponOffersListRequestDeprecated(buffer_arg) {
  return io_single_use_coupons_offer_pb.CouponOffersListRequestDeprecated.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_single_use_coupons_ExternalIdRequest(arg) {
  if (!(arg instanceof io_single_use_coupons_coupon_pb.ExternalIdRequest)) {
    throw new Error('Expected argument of type single_use_coupons.ExternalIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_single_use_coupons_ExternalIdRequest(buffer_arg) {
  return io_single_use_coupons_coupon_pb.ExternalIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_single_use_coupons_ListRequest(arg) {
  if (!(arg instanceof io_single_use_coupons_coupon_pb.ListRequest)) {
    throw new Error('Expected argument of type single_use_coupons.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_single_use_coupons_ListRequest(buffer_arg) {
  return io_single_use_coupons_coupon_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_single_use_coupons_ListRequestDeprecated(arg) {
  if (!(arg instanceof io_single_use_coupons_coupon_pb.ListRequestDeprecated)) {
    throw new Error('Expected argument of type single_use_coupons.ListRequestDeprecated');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_single_use_coupons_ListRequestDeprecated(buffer_arg) {
  return io_single_use_coupons_coupon_pb.ListRequestDeprecated.deserializeBinary(new Uint8Array(buffer_arg));
}


var SingleUseCouponsService = exports['single_use_coupons.SingleUseCoupons'] = {
  createCouponCampaign: {
    path: '/single_use_coupons.SingleUseCoupons/createCouponCampaign',
    requestStream: false,
    responseStream: false,
    requestType: io_single_use_coupons_campaign_pb.CouponCampaign,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_single_use_coupons_CouponCampaign,
    requestDeserialize: deserialize_single_use_coupons_CouponCampaign,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updateCouponCampaign: {
    path: '/single_use_coupons.SingleUseCoupons/updateCouponCampaign',
    requestStream: false,
    responseStream: false,
    requestType: io_single_use_coupons_campaign_pb.CouponCampaign,
    responseType: io_single_use_coupons_campaign_pb.CouponCampaign,
    requestSerialize: serialize_single_use_coupons_CouponCampaign,
    requestDeserialize: deserialize_single_use_coupons_CouponCampaign,
    responseSerialize: serialize_single_use_coupons_CouponCampaign,
    responseDeserialize: deserialize_single_use_coupons_CouponCampaign,
  },
  getCouponCampaign: {
    path: '/single_use_coupons.SingleUseCoupons/getCouponCampaign',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_single_use_coupons_campaign_pb.CouponCampaign,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_single_use_coupons_CouponCampaign,
    responseDeserialize: deserialize_single_use_coupons_CouponCampaign,
  },
  deleteCouponCampaign: {
    path: '/single_use_coupons.SingleUseCoupons/deleteCouponCampaign',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listCouponCampaignsDeprecated: {
    path: '/single_use_coupons.SingleUseCoupons/listCouponCampaignsDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_single_use_coupons_campaign_pb.CouponCampaign,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_single_use_coupons_CouponCampaign,
    responseDeserialize: deserialize_single_use_coupons_CouponCampaign,
  },
  listCouponCampaigns: {
    path: '/single_use_coupons.SingleUseCoupons/listCouponCampaigns',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_single_use_coupons_campaign_pb.CouponCampaign,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_single_use_coupons_CouponCampaign,
    responseDeserialize: deserialize_single_use_coupons_CouponCampaign,
  },
  getAnalytics: {
    path: '/single_use_coupons.SingleUseCoupons/getAnalytics',
    requestStream: false,
    responseStream: false,
    requestType: io_common_reporting_pb.AnalyticsRequest,
    responseType: io_single_use_coupons_campaign_pb.CouponCampaignAnalyticsResponse,
    requestSerialize: serialize_io_AnalyticsRequest,
    requestDeserialize: deserialize_io_AnalyticsRequest,
    responseSerialize: serialize_single_use_coupons_CouponCampaignAnalyticsResponse,
    responseDeserialize: deserialize_single_use_coupons_CouponCampaignAnalyticsResponse,
  },
  createCouponOffer: {
    path: '/single_use_coupons.SingleUseCoupons/createCouponOffer',
    requestStream: false,
    responseStream: false,
    requestType: io_single_use_coupons_offer_pb.CouponOffer,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_single_use_coupons_CouponOffer,
    requestDeserialize: deserialize_single_use_coupons_CouponOffer,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updateCouponOffer: {
    path: '/single_use_coupons.SingleUseCoupons/updateCouponOffer',
    requestStream: false,
    responseStream: false,
    requestType: io_single_use_coupons_offer_pb.CouponOffer,
    responseType: io_single_use_coupons_offer_pb.CouponOffer,
    requestSerialize: serialize_single_use_coupons_CouponOffer,
    requestDeserialize: deserialize_single_use_coupons_CouponOffer,
    responseSerialize: serialize_single_use_coupons_CouponOffer,
    responseDeserialize: deserialize_single_use_coupons_CouponOffer,
  },
  getCouponOffer: {
    path: '/single_use_coupons.SingleUseCoupons/getCouponOffer',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_single_use_coupons_offer_pb.CouponOffer,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_single_use_coupons_CouponOffer,
    responseDeserialize: deserialize_single_use_coupons_CouponOffer,
  },
  deleteCouponOffer: {
    path: '/single_use_coupons.SingleUseCoupons/deleteCouponOffer',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listCouponOffersDeprecated: {
    path: '/single_use_coupons.SingleUseCoupons/listCouponOffersDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_single_use_coupons_offer_pb.CouponOffersListRequestDeprecated,
    responseType: io_single_use_coupons_offer_pb.CouponOffer,
    requestSerialize: serialize_single_use_coupons_CouponOffersListRequestDeprecated,
    requestDeserialize: deserialize_single_use_coupons_CouponOffersListRequestDeprecated,
    responseSerialize: serialize_single_use_coupons_CouponOffer,
    responseDeserialize: deserialize_single_use_coupons_CouponOffer,
  },
  listCouponOffers: {
    path: '/single_use_coupons.SingleUseCoupons/listCouponOffers',
    requestStream: false,
    responseStream: true,
    requestType: io_single_use_coupons_offer_pb.CouponOffersListRequest,
    responseType: io_single_use_coupons_offer_pb.CouponOffer,
    requestSerialize: serialize_single_use_coupons_CouponOffersListRequest,
    requestDeserialize: deserialize_single_use_coupons_CouponOffersListRequest,
    responseSerialize: serialize_single_use_coupons_CouponOffer,
    responseDeserialize: deserialize_single_use_coupons_CouponOffer,
  },
  createCoupon: {
    path: '/single_use_coupons.SingleUseCoupons/createCoupon',
    requestStream: false,
    responseStream: false,
    requestType: io_single_use_coupons_coupon_pb.Coupon,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_single_use_coupons_Coupon,
    requestDeserialize: deserialize_single_use_coupons_Coupon,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updateCoupon: {
    path: '/single_use_coupons.SingleUseCoupons/updateCoupon',
    requestStream: false,
    responseStream: false,
    requestType: io_single_use_coupons_coupon_pb.Coupon,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_single_use_coupons_Coupon,
    requestDeserialize: deserialize_single_use_coupons_Coupon,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  streamCouponUpdates: {
    path: '/single_use_coupons.SingleUseCoupons/streamCouponUpdates',
    requestStream: true,
    responseStream: true,
    requestType: io_single_use_coupons_coupon_pb.Coupon,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_single_use_coupons_Coupon,
    requestDeserialize: deserialize_single_use_coupons_Coupon,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  redeemCoupon: {
    path: '/single_use_coupons.SingleUseCoupons/redeemCoupon',
    requestStream: false,
    responseStream: false,
    requestType: io_single_use_coupons_coupon_pb.Coupon,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_single_use_coupons_Coupon,
    requestDeserialize: deserialize_single_use_coupons_Coupon,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updateCouponExternalId: {
    path: '/single_use_coupons.SingleUseCoupons/updateCouponExternalId',
    requestStream: false,
    responseStream: false,
    requestType: io_single_use_coupons_coupon_pb.CouponNewExternalIdRequest,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_single_use_coupons_CouponNewExternalIdRequest,
    requestDeserialize: deserialize_single_use_coupons_CouponNewExternalIdRequest,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  streamCouponRedemptions: {
    path: '/single_use_coupons.SingleUseCoupons/streamCouponRedemptions',
    requestStream: true,
    responseStream: true,
    requestType: io_single_use_coupons_coupon_pb.Coupon,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_single_use_coupons_Coupon,
    requestDeserialize: deserialize_single_use_coupons_Coupon,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  getCouponById: {
    path: '/single_use_coupons.SingleUseCoupons/getCouponById',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_single_use_coupons_coupon_pb.Coupon,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_single_use_coupons_Coupon,
    responseDeserialize: deserialize_single_use_coupons_Coupon,
  },
  getCouponByExternalId: {
    path: '/single_use_coupons.SingleUseCoupons/getCouponByExternalId',
    requestStream: false,
    responseStream: false,
    requestType: io_single_use_coupons_coupon_pb.ExternalIdRequest,
    responseType: io_single_use_coupons_coupon_pb.Coupon,
    requestSerialize: serialize_single_use_coupons_ExternalIdRequest,
    requestDeserialize: deserialize_single_use_coupons_ExternalIdRequest,
    responseSerialize: serialize_single_use_coupons_Coupon,
    responseDeserialize: deserialize_single_use_coupons_Coupon,
  },
  voidCoupon: {
    path: '/single_use_coupons.SingleUseCoupons/voidCoupon',
    requestStream: false,
    responseStream: false,
    requestType: io_single_use_coupons_coupon_pb.Coupon,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_single_use_coupons_Coupon,
    requestDeserialize: deserialize_single_use_coupons_Coupon,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listCouponsByCouponCampaignDeprecated: {
    path: '/single_use_coupons.SingleUseCoupons/listCouponsByCouponCampaignDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_single_use_coupons_coupon_pb.ListRequestDeprecated,
    responseType: io_single_use_coupons_coupon_pb.Coupon,
    requestSerialize: serialize_single_use_coupons_ListRequestDeprecated,
    requestDeserialize: deserialize_single_use_coupons_ListRequestDeprecated,
    responseSerialize: serialize_single_use_coupons_Coupon,
    responseDeserialize: deserialize_single_use_coupons_Coupon,
  },
  listCouponsByCouponCampaign: {
    path: '/single_use_coupons.SingleUseCoupons/listCouponsByCouponCampaign',
    requestStream: false,
    responseStream: true,
    requestType: io_single_use_coupons_coupon_pb.ListRequest,
    responseType: io_single_use_coupons_coupon_pb.Coupon,
    requestSerialize: serialize_single_use_coupons_ListRequest,
    requestDeserialize: deserialize_single_use_coupons_ListRequest,
    responseSerialize: serialize_single_use_coupons_Coupon,
    responseDeserialize: deserialize_single_use_coupons_Coupon,
  },
  countCouponsByCouponCampaignDeprecated: {
    path: '/single_use_coupons.SingleUseCoupons/countCouponsByCouponCampaignDeprecated',
    requestStream: false,
    responseStream: false,
    requestType: io_single_use_coupons_coupon_pb.ListRequestDeprecated,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_single_use_coupons_ListRequestDeprecated,
    requestDeserialize: deserialize_single_use_coupons_ListRequestDeprecated,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  countCouponsByCouponCampaign: {
    path: '/single_use_coupons.SingleUseCoupons/countCouponsByCouponCampaign',
    requestStream: false,
    responseStream: false,
    requestType: io_single_use_coupons_coupon_pb.ListRequest,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_single_use_coupons_ListRequest,
    requestDeserialize: deserialize_single_use_coupons_ListRequest,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  patchPerson: {
    path: '/single_use_coupons.SingleUseCoupons/patchPerson',
    requestStream: false,
    responseStream: false,
    requestType: io_common_personal_pb.PersonRequest,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_PersonRequest,
    requestDeserialize: deserialize_io_PersonRequest,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  copyCouponCampaign: {
    path: '/single_use_coupons.SingleUseCoupons/copyCouponCampaign',
    requestStream: false,
    responseStream: false,
    requestType: io_single_use_coupons_campaign_pb.CampaignCopyRequest,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_single_use_coupons_CampaignCopyRequest,
    requestDeserialize: deserialize_single_use_coupons_CampaignCopyRequest,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  getMetaKeysForCampaign: {
    path: '/single_use_coupons.SingleUseCoupons/getMetaKeysForCampaign',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_common_objects_pb.Strings,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_Strings,
    responseDeserialize: deserialize_io_Strings,
  },
};

