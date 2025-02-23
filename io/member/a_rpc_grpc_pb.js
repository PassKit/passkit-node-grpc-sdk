// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// Members RPC
//
// The PassKit Members API lets you manage your membership programs and passes for Apple Wallet and Google Pay.
'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
var io_common_distribution_pb = require('../../io/common/distribution_pb.js');
var io_common_message_pb = require('../../io/common/message_pb.js');
var io_common_pagination_pb = require('../../io/common/pagination_pb.js');
var io_common_filter_pb = require('../../io/common/filter_pb.js');
var io_common_personal_pb = require('../../io/common/personal_pb.js');
var io_member_member_events_pb = require('../../io/member/member_events_pb.js');
var io_member_member_pb = require('../../io/member/member_pb.js');
var io_member_program_pb = require('../../io/member/program_pb.js');
var io_member_tier_pb = require('../../io/member/tier_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_BulkPassActionRequest(arg) {
  if (!(arg instanceof io_common_common_objects_pb.BulkPassActionRequest)) {
    throw new Error('Expected argument of type io.BulkPassActionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_BulkPassActionRequest(buffer_arg) {
  return io_common_common_objects_pb.BulkPassActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_EnrolmentUrls(arg) {
  if (!(arg instanceof io_common_distribution_pb.EnrolmentUrls)) {
    throw new Error('Expected argument of type io.EnrolmentUrls');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_EnrolmentUrls(buffer_arg) {
  return io_common_distribution_pb.EnrolmentUrls.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_Message(arg) {
  if (!(arg instanceof io_common_message_pb.Message)) {
    throw new Error('Expected argument of type io.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Message(buffer_arg) {
  return io_common_message_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_members_ChangeTierRequest(arg) {
  if (!(arg instanceof io_member_member_pb.ChangeTierRequest)) {
    throw new Error('Expected argument of type members.ChangeTierRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_ChangeTierRequest(buffer_arg) {
  return io_member_member_pb.ChangeTierRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_EarnBurnPointsRequest(arg) {
  if (!(arg instanceof io_member_member_pb.EarnBurnPointsRequest)) {
    throw new Error('Expected argument of type members.EarnBurnPointsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_EarnBurnPointsRequest(buffer_arg) {
  return io_member_member_pb.EarnBurnPointsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_ListRequest(arg) {
  if (!(arg instanceof io_member_member_pb.ListRequest)) {
    throw new Error('Expected argument of type members.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_ListRequest(buffer_arg) {
  return io_member_member_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_ListRequestDeprecated(arg) {
  if (!(arg instanceof io_member_member_pb.ListRequestDeprecated)) {
    throw new Error('Expected argument of type members.ListRequestDeprecated');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_ListRequestDeprecated(buffer_arg) {
  return io_member_member_pb.ListRequestDeprecated.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_Member(arg) {
  if (!(arg instanceof io_member_member_pb.Member)) {
    throw new Error('Expected argument of type members.Member');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_Member(buffer_arg) {
  return io_member_member_pb.Member.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_MemberCheckInOutRequest(arg) {
  if (!(arg instanceof io_member_member_pb.MemberCheckInOutRequest)) {
    throw new Error('Expected argument of type members.MemberCheckInOutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_MemberCheckInOutRequest(buffer_arg) {
  return io_member_member_pb.MemberCheckInOutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_MemberEvent(arg) {
  if (!(arg instanceof io_member_member_events_pb.MemberEvent)) {
    throw new Error('Expected argument of type members.MemberEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_MemberEvent(buffer_arg) {
  return io_member_member_events_pb.MemberEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_MemberExpiry(arg) {
  if (!(arg instanceof io_member_member_pb.MemberExpiry)) {
    throw new Error('Expected argument of type members.MemberExpiry');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_MemberExpiry(buffer_arg) {
  return io_member_member_pb.MemberExpiry.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_MemberPoints(arg) {
  if (!(arg instanceof io_member_member_pb.MemberPoints)) {
    throw new Error('Expected argument of type members.MemberPoints');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_MemberPoints(buffer_arg) {
  return io_member_member_pb.MemberPoints.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_MemberRecordByExternalIdRequest(arg) {
  if (!(arg instanceof io_member_member_pb.MemberRecordByExternalIdRequest)) {
    throw new Error('Expected argument of type members.MemberRecordByExternalIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_MemberRecordByExternalIdRequest(buffer_arg) {
  return io_member_member_pb.MemberRecordByExternalIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_MemberSegmentRequest(arg) {
  if (!(arg instanceof io_member_member_pb.MemberSegmentRequest)) {
    throw new Error('Expected argument of type members.MemberSegmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_MemberSegmentRequest(buffer_arg) {
  return io_member_member_pb.MemberSegmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_Program(arg) {
  if (!(arg instanceof io_member_program_pb.Program)) {
    throw new Error('Expected argument of type members.Program');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_Program(buffer_arg) {
  return io_member_program_pb.Program.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_ProgramCopyRequest(arg) {
  if (!(arg instanceof io_member_program_pb.ProgramCopyRequest)) {
    throw new Error('Expected argument of type members.ProgramCopyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_ProgramCopyRequest(buffer_arg) {
  return io_member_program_pb.ProgramCopyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_SetPointsRequest(arg) {
  if (!(arg instanceof io_member_member_pb.SetPointsRequest)) {
    throw new Error('Expected argument of type members.SetPointsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_SetPointsRequest(buffer_arg) {
  return io_member_member_pb.SetPointsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_Tier(arg) {
  if (!(arg instanceof io_member_tier_pb.Tier)) {
    throw new Error('Expected argument of type members.Tier');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_Tier(buffer_arg) {
  return io_member_tier_pb.Tier.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_TierRequestInput(arg) {
  if (!(arg instanceof io_member_tier_pb.TierRequestInput)) {
    throw new Error('Expected argument of type members.TierRequestInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_TierRequestInput(buffer_arg) {
  return io_member_tier_pb.TierRequestInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_members_UpdateExpiryRequest(arg) {
  if (!(arg instanceof io_member_member_pb.UpdateExpiryRequest)) {
    throw new Error('Expected argument of type members.UpdateExpiryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_members_UpdateExpiryRequest(buffer_arg) {
  return io_member_member_pb.UpdateExpiryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var MembersService = exports.MembersService = {
  // Create a program record. Allows a user to specify program details around enrolment, renewal and cancellation processes. Optionally allows the user to set the GPS location / Beacons that will trigger a lock-screen alert.
createProgram: {
    path: '/members.Members/createProgram',
    requestStream: false,
    responseStream: false,
    requestType: io_member_program_pb.Program,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_members_Program,
    requestDeserialize: deserialize_members_Program,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  // Updates an existing program record.
updateProgram: {
    path: '/members.Members/updateProgram',
    requestStream: false,
    responseStream: false,
    requestType: io_member_program_pb.Program,
    responseType: io_member_program_pb.Program,
    requestSerialize: serialize_members_Program,
    requestDeserialize: deserialize_members_Program,
    responseSerialize: serialize_members_Program,
    responseDeserialize: deserialize_members_Program,
  },
  // Gets an existing program record by id.
getProgram: {
    path: '/members.Members/getProgram',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_member_program_pb.Program,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_members_Program,
    responseDeserialize: deserialize_members_Program,
  },
  // Copies an existing program record to a new record, and allows for status of new program to be set; i.e. copy a draft to published (production) program. Will copy program AND related tier + template records.
copyProgram: {
    path: '/members.Members/copyProgram',
    requestStream: false,
    responseStream: false,
    requestType: io_member_program_pb.ProgramCopyRequest,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_members_ProgramCopyRequest,
    requestDeserialize: deserialize_members_ProgramCopyRequest,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  // Deletes an existing program record by id. Deleting a program results in all tiers, and members underneath it being invalidated and removed. Needs to be used with care.
deleteProgram: {
    path: '/members.Members/deleteProgram',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists all programs for the logged in user.
listProgramsDeprecated: {
    path: '/members.Members/listProgramsDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_member_program_pb.Program,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_members_Program,
    responseDeserialize: deserialize_members_Program,
  },
  // Lists all programs for the logged in user.
listPrograms: {
    path: '/members.Members/listPrograms',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_member_program_pb.Program,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_members_Program,
    responseDeserialize: deserialize_members_Program,
  },
  // Create a new tier in an existing member program. Tiers allow a user to categorize their membership program; tiers allow for additional detail that is specific to that 'group' of members. A program needs at least one tier.
createTier: {
    path: '/members.Members/createTier',
    requestStream: false,
    responseStream: false,
    requestType: io_member_tier_pb.Tier,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_members_Tier,
    requestDeserialize: deserialize_members_Tier,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  // Updates a tier by tier id
updateTier: {
    path: '/members.Members/updateTier',
    requestStream: false,
    responseStream: false,
    requestType: io_member_tier_pb.Tier,
    responseType: io_member_tier_pb.Tier,
    requestSerialize: serialize_members_Tier,
    requestDeserialize: deserialize_members_Tier,
    responseSerialize: serialize_members_Tier,
    responseDeserialize: deserialize_members_Tier,
  },
  // Gets a tier by tier ID
getTier: {
    path: '/members.Members/getTier',
    requestStream: false,
    responseStream: false,
    requestType: io_member_tier_pb.TierRequestInput,
    responseType: io_member_tier_pb.Tier,
    requestSerialize: serialize_members_TierRequestInput,
    requestDeserialize: deserialize_members_TierRequestInput,
    responseSerialize: serialize_members_Tier,
    responseDeserialize: deserialize_members_Tier,
  },
  // Deletes a tier. Deleting a tier will invalidate and delete all the passes that are in the tier.
deleteTier: {
    path: '/members.Members/deleteTier',
    requestStream: false,
    responseStream: false,
    requestType: io_member_tier_pb.TierRequestInput,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_members_TierRequestInput,
    requestDeserialize: deserialize_members_TierRequestInput,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists all the tiers.
listTiersDeprecated: {
    path: '/members.Members/listTiersDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_member_member_pb.ListRequestDeprecated,
    responseType: io_member_tier_pb.Tier,
    requestSerialize: serialize_members_ListRequestDeprecated,
    requestDeserialize: deserialize_members_ListRequestDeprecated,
    responseSerialize: serialize_members_Tier,
    responseDeserialize: deserialize_members_Tier,
  },
  // Lists all the tiers.
listTiers: {
    path: '/members.Members/listTiers',
    requestStream: false,
    responseStream: true,
    requestType: io_member_member_pb.ListRequest,
    responseType: io_member_tier_pb.Tier,
    requestSerialize: serialize_members_ListRequest,
    requestDeserialize: deserialize_members_ListRequest,
    responseSerialize: serialize_members_Tier,
    responseDeserialize: deserialize_members_Tier,
  },
  // Enrols a new member into a tier of a program. Returns the PassKit Member ID.
enrolMember: {
    path: '/members.Members/enrolMember',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.Member,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_members_Member,
    requestDeserialize: deserialize_members_Member,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  // Enrols a new member into the default tier (lowest tier index) of a program. Returns the PassKit Member ID.
enrolMemberPublic: {
    path: '/members.Members/enrolMemberPublic',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.Member,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_members_Member,
    requestDeserialize: deserialize_members_Member,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  getMemberRecordById: {
    path: '/members.Members/getMemberRecordById',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_member_member_pb.Member,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_members_Member,
    responseDeserialize: deserialize_members_Member,
  },
  getMemberRecordByExternalId: {
    path: '/members.Members/getMemberRecordByExternalId',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.MemberRecordByExternalIdRequest,
    responseType: io_member_member_pb.Member,
    requestSerialize: serialize_members_MemberRecordByExternalIdRequest,
    requestDeserialize: deserialize_members_MemberRecordByExternalIdRequest,
    responseSerialize: serialize_members_Member,
    responseDeserialize: deserialize_members_Member,
  },
  checkInMember: {
    path: '/members.Members/checkInMember',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.MemberCheckInOutRequest,
    responseType: io_member_member_events_pb.MemberEvent,
    requestSerialize: serialize_members_MemberCheckInOutRequest,
    requestDeserialize: deserialize_members_MemberCheckInOutRequest,
    responseSerialize: serialize_members_MemberEvent,
    responseDeserialize: deserialize_members_MemberEvent,
  },
  checkOutMember: {
    path: '/members.Members/checkOutMember',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.MemberCheckInOutRequest,
    responseType: io_member_member_events_pb.MemberEvent,
    requestSerialize: serialize_members_MemberCheckInOutRequest,
    requestDeserialize: deserialize_members_MemberCheckInOutRequest,
    responseSerialize: serialize_members_MemberEvent,
    responseDeserialize: deserialize_members_MemberEvent,
  },
  listMembersDeprecated: {
    path: '/members.Members/listMembersDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_member_member_pb.ListRequestDeprecated,
    responseType: io_member_member_pb.Member,
    requestSerialize: serialize_members_ListRequestDeprecated,
    requestDeserialize: deserialize_members_ListRequestDeprecated,
    responseSerialize: serialize_members_Member,
    responseDeserialize: deserialize_members_Member,
  },
  listMembers: {
    path: '/members.Members/listMembers',
    requestStream: false,
    responseStream: true,
    requestType: io_member_member_pb.ListRequest,
    responseType: io_member_member_pb.Member,
    requestSerialize: serialize_members_ListRequest,
    requestDeserialize: deserialize_members_ListRequest,
    responseSerialize: serialize_members_Member,
    responseDeserialize: deserialize_members_Member,
  },
  updateMember: {
    path: '/members.Members/updateMember',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.Member,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_members_Member,
    requestDeserialize: deserialize_members_Member,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  // @todo: define callback
earnPoints: {
    path: '/members.Members/earnPoints',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.EarnBurnPointsRequest,
    responseType: io_member_member_pb.MemberPoints,
    requestSerialize: serialize_members_EarnBurnPointsRequest,
    requestDeserialize: deserialize_members_EarnBurnPointsRequest,
    responseSerialize: serialize_members_MemberPoints,
    responseDeserialize: deserialize_members_MemberPoints,
  },
  // @todo: define callback
burnPoints: {
    path: '/members.Members/burnPoints',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.EarnBurnPointsRequest,
    responseType: io_member_member_pb.MemberPoints,
    requestSerialize: serialize_members_EarnBurnPointsRequest,
    requestDeserialize: deserialize_members_EarnBurnPointsRequest,
    responseSerialize: serialize_members_MemberPoints,
    responseDeserialize: deserialize_members_MemberPoints,
  },
  setPoints: {
    path: '/members.Members/setPoints',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.SetPointsRequest,
    responseType: io_member_member_pb.MemberPoints,
    requestSerialize: serialize_members_SetPointsRequest,
    requestDeserialize: deserialize_members_SetPointsRequest,
    responseSerialize: serialize_members_MemberPoints,
    responseDeserialize: deserialize_members_MemberPoints,
  },
  changeMemberTier: {
    path: '/members.Members/changeMemberTier',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.ChangeTierRequest,
    responseType: io_member_member_events_pb.MemberEvent,
    requestSerialize: serialize_members_ChangeTierRequest,
    requestDeserialize: deserialize_members_ChangeTierRequest,
    responseSerialize: serialize_members_MemberEvent,
    responseDeserialize: deserialize_members_MemberEvent,
  },
  updateMembersBySegment: {
    path: '/members.Members/updateMembersBySegment',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.MemberSegmentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_members_MemberSegmentRequest,
    requestDeserialize: deserialize_members_MemberSegmentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteMembersBySegment: {
    path: '/members.Members/deleteMembersBySegment',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.MemberSegmentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_members_MemberSegmentRequest,
    requestDeserialize: deserialize_members_MemberSegmentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteMember: {
    path: '/members.Members/deleteMember',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.Member,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_members_Member,
    requestDeserialize: deserialize_members_Member,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  bulkDeleteMembers: {
    path: '/members.Members/bulkDeleteMembers',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.BulkPassActionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_BulkPassActionRequest,
    requestDeserialize: deserialize_io_BulkPassActionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  countMembersDeprecated: {
    path: '/members.Members/countMembersDeprecated',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.ListRequestDeprecated,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_members_ListRequestDeprecated,
    requestDeserialize: deserialize_members_ListRequestDeprecated,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  countMembers: {
    path: '/members.Members/countMembers',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.ListRequest,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_members_ListRequest,
    requestDeserialize: deserialize_members_ListRequest,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  getMessageHistoryForMember: {
    path: '/members.Members/getMessageHistoryForMember',
    requestStream: false,
    responseStream: true,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_message_pb.Message,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_Message,
    responseDeserialize: deserialize_io_Message,
  },
  getMetaKeysForProgram: {
    path: '/members.Members/getMetaKeysForProgram',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_common_objects_pb.Strings,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_Strings,
    responseDeserialize: deserialize_io_Strings,
  },
  renewMembersExpiry: {
    path: '/members.Members/renewMembersExpiry',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.UpdateExpiryRequest,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_members_UpdateExpiryRequest,
    requestDeserialize: deserialize_members_UpdateExpiryRequest,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  updateMemberExpiry: {
    path: '/members.Members/updateMemberExpiry',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.MemberExpiry,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_members_MemberExpiry,
    requestDeserialize: deserialize_members_MemberExpiry,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  patchPerson: {
    path: '/members.Members/patchPerson',
    requestStream: false,
    responseStream: false,
    requestType: io_common_personal_pb.PersonRequest,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_PersonRequest,
    requestDeserialize: deserialize_io_PersonRequest,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  countMemberEvents: {
    path: '/members.Members/countMemberEvents',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.ListRequest,
    responseType: io_common_common_objects_pb.Count,
    requestSerialize: serialize_members_ListRequest,
    requestDeserialize: deserialize_members_ListRequest,
    responseSerialize: serialize_io_Count,
    responseDeserialize: deserialize_io_Count,
  },
  listMemberEvents: {
    path: '/members.Members/listMemberEvents',
    requestStream: false,
    responseStream: true,
    requestType: io_member_member_pb.ListRequest,
    responseType: io_member_member_events_pb.MemberEvent,
    requestSerialize: serialize_members_ListRequest,
    requestDeserialize: deserialize_members_ListRequest,
    responseSerialize: serialize_members_MemberEvent,
    responseDeserialize: deserialize_members_MemberEvent,
  },
  getMemberEventMetaKeysForProgram: {
    path: '/members.Members/getMemberEventMetaKeysForProgram',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_common_objects_pb.Strings,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_Strings,
    responseDeserialize: deserialize_io_Strings,
  },
  listEventsForMember: {
    path: '/members.Members/listEventsForMember',
    requestStream: false,
    responseStream: true,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_member_member_events_pb.MemberEvent,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_members_MemberEvent,
    responseDeserialize: deserialize_members_MemberEvent,
  },
  deleteMemberEvents: {
    path: '/members.Members/deleteMemberEvents',
    requestStream: false,
    responseStream: false,
    requestType: io_member_member_pb.ListRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_members_ListRequest,
    requestDeserialize: deserialize_members_ListRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteEventsForMember: {
    path: '/members.Members/deleteEventsForMember',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteMemberEvent: {
    path: '/members.Members/deleteMemberEvent',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getProgramEnrolment: {
    path: '/members.Members/getProgramEnrolment',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_distribution_pb.EnrolmentUrls,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_EnrolmentUrls,
    responseDeserialize: deserialize_io_EnrolmentUrls,
  },
};

exports.MembersClient = grpc.makeGenericClientConstructor(MembersService, 'Members');
