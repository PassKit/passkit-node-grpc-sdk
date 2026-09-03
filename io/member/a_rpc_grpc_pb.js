// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// Members RPC
//
// The PassKit Members API lets you manage your membership programs and passes for Apple Wallet and Google Wallet.
'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
var io_common_batch_update_pb = require('../../io/common/batch_update_pb.js');
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

function serialize_io_BatchUpdateRequest(arg) {
  if (!(arg instanceof io_common_batch_update_pb.BatchUpdateRequest)) {
    throw new Error('Expected argument of type io.BatchUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_BatchUpdateRequest(buffer_arg) {
  return io_common_batch_update_pb.BatchUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Manages membership programmes, tiers, members, member events, pass lifecycle, and point balances. Create a programme before creating tiers or enrolling members.
var MembersService = exports.MembersService = {
  // Creates a new membership program with details about enrollment, renewal, and cancellation. Optionally configure GPS locations and Beacons to trigger lock-screen notifications. Required fields: program name.
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
  // Updates an existing membership program with new details or settings. Required fields: program id.
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
  // Retrieves a membership program by its unique id. Required fields: program id.
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
  // Creates a new program by copying the configuration and design of an existing program. Required fields: source program id.
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
  // Permanently deletes a membership program and its associated data, including all passes. Required fields: program id. Use with caution, as this action is irreversible.
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
  // Lists all membership programs associated with your project. Supports filtering and pagination. This version uses the legacy request format and is maintained for backward compatibility. New integrations should use the updated listPrograms call instead.
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
  // Lists all membership programs associated with your project. Supports filtering options to narrow down the results based on specific criteria.
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
  // Creates a new membership tier within a program, specifying criteria, benefits, and settings. Required fields: program id, tier name.
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
  // Updates an existing membership tier’s details such as benefits, qualifications, and rules. Required fields: tier id.
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
  // Retrieves details of a specific membership tier by its id. Required fields: tier id.
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
  // Deletes a membership tier from a program. Required fields: tier id.
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
  // Retrieves a list of all membership tiers within a membership program. Required fields: program id. This version uses the legacy request format and is maintained for backward compatibility. New integrations should use listTiers.
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
  // Retrieves a list of all membership tiers within a membership program. Required fields: program id. Supports filtering options to narrow down the results based on specific criteria.
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
  // Enrols a member in a programme and creates their pass record. The request must identify the target programme and member data.
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
  // Enrols a member through the public, unauthenticated enrolment endpoint. The request must identify the target programme and member data.
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
  // Retrieves a member record using the PassKit id. Required fields: member id.
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
  // Retrieves a member record using the member's external id. Required fields: program id and external id.
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
  // Checks in a member in by PassKit Id or External Id. Required fields: member id or program id and external id.
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
  // Checks out a member in by PassKit Id or External Id. Required fields: member id or program id and external id.
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
  // Retrieves a list of all members within a membership program. Required fields: program id. This version uses the legacy request format and is maintained for backward compatibility. New integrations should use listMembers as OR operator is not supported.
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
  // Retrieves a list of all members within a membership program. Required fields: program id. Supports filtering options to narrow down the results based on specific criteria.
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
  // Updates a member record by PassKit ID or external ID. Use patchPerson when changing personal information only.
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
  // Adds (earns) loyalty points to a member's account using PassKit Id or External Id. Required fields: member id, or program id and external id, and number of points to earn.
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
  // Removes (burns) loyalty points to a member's account using PassKit Id or External Id. Required fields: member id, or program id and external id, and number of points to burn.
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
  // Sets loyalty points balance to a specific value for a member using PassKit Id or External Id. Required fields: member id, or program id and external id, and new points balance.
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
  // Changes a member’s tier within a program using PassKit Id or External Id. Required fields: member id, or program id and external id, and new tier id.
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
  // Updates multiple members based on filtering criteria. This version uses the legacy request format and is maintained for backward compatibility. New integrations should use bulkUpdateMembers.
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
  // Deletes multiple members based on filtering criteria. This version uses the legacy request format and is maintained for backward compatibility. New integrations should use bulkDeleteMembers.
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
  // Deletes a single member by their PassKit Id or External ID. Required fields: member id or program id and external id.
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
  // Bulk deletes multiple members from a program based on provided criteria. Required fields: program id, protocol and filters criteria.
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
  // Counts the number of members matching a filter. Required fields: program id. This version uses the legacy request format and is maintained for backward compatibility. New integrations should use countMembers as OR operator is not supported.
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
  // Counts the number of members matching a filter. Required fields: program id.
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
  // [UNIMPLEMENTED] Retrieves the message history sent to a member. Required fields: member id.
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
  // Retrieves meta keys (custom fields) for a specific program. Required fields: program id.
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
  // Batch updates the expiry dates for ALL members. Required fields: program id, tier id and new expiry settings.
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
  // Updates the expiry date for a member’s pass using the PassKit Id or External Id. Required fields: member id, or external id and program id, and new expiry date.
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
  // Updates a member's personal information, such as name, address, or contact details. Required fields: member id, or external id and program id, and new member information.
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
  // Counts the number of member events for a specific program based on given filters. Required fields: program id.
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
  // Lists events related to members in a specific program, supporting filtering and pagination. Required fields: program id.
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
  // Retrieves the list of meta keys associated with member events for a specific program. Required fields: program id.
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
  // Lists events for a specific member, such as check-ins/outs, changes to points etc. Required fields: member id.
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
  // Deletes member event history for a program based on specified criteria. Required fields: program id.
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
  // Deletes all member events associated with a specific member. Required fields: member id.
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
  // Deletes a specific individual member event. Required fields: member event id.
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
  // Retrieves enrolment URLs and QR codes for a membership program, including tier-specific links if applicable. Required fields: program id.
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
  // Applies the supplied field updates to members selected by the request filters. Required fields: classId, filterGroups, updateEntries.
batchUpdate: {
    path: '/members.Members/batchUpdate',
    requestStream: false,
    responseStream: false,
    requestType: io_common_batch_update_pb.BatchUpdateRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_BatchUpdateRequest,
    requestDeserialize: deserialize_io_BatchUpdateRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.MembersClient = grpc.makeGenericClientConstructor(MembersService, 'Members');
