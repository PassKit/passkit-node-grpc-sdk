// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
var io_common_project_pb = require('../../io/common/project_pb.js');
var io_common_pagination_pb = require('../../io/common/pagination_pb.js');
var io_common_filter_pb = require('../../io/common/filter_pb.js');
var io_common_integration_pb = require('../../io/common/integration_pb.js');
var io_user_user_pb = require('../../io/user/user_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_AuditLog(arg) {
  if (!(arg instanceof io_user_user_pb.AuditLog)) {
    throw new Error('Expected argument of type io.AuditLog');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_AuditLog(buffer_arg) {
  return io_user_user_pb.AuditLog.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_AuditLogRequest(arg) {
  if (!(arg instanceof io_user_user_pb.AuditLogRequest)) {
    throw new Error('Expected argument of type io.AuditLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_AuditLogRequest(buffer_arg) {
  return io_user_user_pb.AuditLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Boolean(arg) {
  if (!(arg instanceof io_common_common_objects_pb.Boolean)) {
    throw new Error('Expected argument of type io.Boolean');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Boolean(buffer_arg) {
  return io_common_common_objects_pb.Boolean.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_CompanyName(arg) {
  if (!(arg instanceof io_user_user_pb.CompanyName)) {
    throw new Error('Expected argument of type io.CompanyName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_CompanyName(buffer_arg) {
  return io_user_user_pb.CompanyName.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ConfirmEmailChangeInput(arg) {
  if (!(arg instanceof io_user_user_pb.ConfirmEmailChangeInput)) {
    throw new Error('Expected argument of type io.ConfirmEmailChangeInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ConfirmEmailChangeInput(buffer_arg) {
  return io_user_user_pb.ConfirmEmailChangeInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Credentials(arg) {
  if (!(arg instanceof io_user_user_pb.Credentials)) {
    throw new Error('Expected argument of type io.Credentials');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Credentials(buffer_arg) {
  return io_user_user_pb.Credentials.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_DeleteAccountRequest(arg) {
  if (!(arg instanceof io_user_user_pb.DeleteAccountRequest)) {
    throw new Error('Expected argument of type io.DeleteAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_DeleteAccountRequest(buffer_arg) {
  return io_user_user_pb.DeleteAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_DynamicApiInput(arg) {
  if (!(arg instanceof io_common_integration_pb.DynamicApiInput)) {
    throw new Error('Expected argument of type io.DynamicApiInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_DynamicApiInput(buffer_arg) {
  return io_common_integration_pb.DynamicApiInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_DynamicApiResponse(arg) {
  if (!(arg instanceof io_common_integration_pb.DynamicApiResponse)) {
    throw new Error('Expected argument of type io.DynamicApiResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_DynamicApiResponse(buffer_arg) {
  return io_common_integration_pb.DynamicApiResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Email(arg) {
  if (!(arg instanceof io_user_user_pb.Email)) {
    throw new Error('Expected argument of type io.Email');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Email(buffer_arg) {
  return io_user_user_pb.Email.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_GetTeamMemberResponse(arg) {
  if (!(arg instanceof io_user_user_pb.GetTeamMemberResponse)) {
    throw new Error('Expected argument of type io.GetTeamMemberResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_GetTeamMemberResponse(buffer_arg) {
  return io_user_user_pb.GetTeamMemberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_GetUserResponse(arg) {
  if (!(arg instanceof io_user_user_pb.GetUserResponse)) {
    throw new Error('Expected argument of type io.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_GetUserResponse(buffer_arg) {
  return io_user_user_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_IntegrationConfigs(arg) {
  if (!(arg instanceof io_common_integration_pb.IntegrationConfigs)) {
    throw new Error('Expected argument of type io.IntegrationConfigs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_IntegrationConfigs(buffer_arg) {
  return io_common_integration_pb.IntegrationConfigs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_JWT(arg) {
  if (!(arg instanceof io_user_user_pb.JWT)) {
    throw new Error('Expected argument of type io.JWT');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_JWT(buffer_arg) {
  return io_user_user_pb.JWT.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ListRequest(arg) {
  if (!(arg instanceof io_common_common_objects_pb.ListRequest)) {
    throw new Error('Expected argument of type io.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ListRequest(buffer_arg) {
  return io_common_common_objects_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ListRequestDeprecated(arg) {
  if (!(arg instanceof io_common_common_objects_pb.ListRequestDeprecated)) {
    throw new Error('Expected argument of type io.ListRequestDeprecated');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ListRequestDeprecated(buffer_arg) {
  return io_common_common_objects_pb.ListRequestDeprecated.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ListTeamMembersResponse(arg) {
  if (!(arg instanceof io_user_user_pb.ListTeamMembersResponse)) {
    throw new Error('Expected argument of type io.ListTeamMembersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ListTeamMembersResponse(buffer_arg) {
  return io_user_user_pb.ListTeamMembersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_NewTeamMember(arg) {
  if (!(arg instanceof io_user_user_pb.NewTeamMember)) {
    throw new Error('Expected argument of type io.NewTeamMember');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_NewTeamMember(buffer_arg) {
  return io_user_user_pb.NewTeamMember.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_NewUser(arg) {
  if (!(arg instanceof io_user_user_pb.NewUser)) {
    throw new Error('Expected argument of type io.NewUser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_NewUser(buffer_arg) {
  return io_user_user_pb.NewUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_NewUserResponse(arg) {
  if (!(arg instanceof io_user_user_pb.NewUserResponse)) {
    throw new Error('Expected argument of type io.NewUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_NewUserResponse(buffer_arg) {
  return io_user_user_pb.NewUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_OAuth2AuthorizationRequest(arg) {
  if (!(arg instanceof io_user_user_pb.OAuth2AuthorizationRequest)) {
    throw new Error('Expected argument of type io.OAuth2AuthorizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_OAuth2AuthorizationRequest(buffer_arg) {
  return io_user_user_pb.OAuth2AuthorizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_io_PasswordResetInput(arg) {
  if (!(arg instanceof io_user_user_pb.PasswordResetInput)) {
    throw new Error('Expected argument of type io.PasswordResetInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_PasswordResetInput(buffer_arg) {
  return io_user_user_pb.PasswordResetInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Project(arg) {
  if (!(arg instanceof io_common_project_pb.Project)) {
    throw new Error('Expected argument of type io.Project');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Project(buffer_arg) {
  return io_common_project_pb.Project.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ProjectByShortCodeResult(arg) {
  if (!(arg instanceof io_common_project_pb.ProjectByShortCodeResult)) {
    throw new Error('Expected argument of type io.ProjectByShortCodeResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ProjectByShortCodeResult(buffer_arg) {
  return io_common_project_pb.ProjectByShortCodeResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ProjectStatusFilter(arg) {
  if (!(arg instanceof io_common_project_pb.ProjectStatusFilter)) {
    throw new Error('Expected argument of type io.ProjectStatusFilter');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ProjectStatusFilter(buffer_arg) {
  return io_common_project_pb.ProjectStatusFilter.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ProtocolIdInput(arg) {
  if (!(arg instanceof io_common_integration_pb.ProtocolIdInput)) {
    throw new Error('Expected argument of type io.ProtocolIdInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ProtocolIdInput(buffer_arg) {
  return io_common_integration_pb.ProtocolIdInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_ScannerConfiguration(arg) {
  if (!(arg instanceof io_user_user_pb.ScannerConfiguration)) {
    throw new Error('Expected argument of type io.ScannerConfiguration');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_ScannerConfiguration(buffer_arg) {
  return io_user_user_pb.ScannerConfiguration.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_SinkSubscription(arg) {
  if (!(arg instanceof io_common_integration_pb.SinkSubscription)) {
    throw new Error('Expected argument of type io.SinkSubscription');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_SinkSubscription(buffer_arg) {
  return io_common_integration_pb.SinkSubscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_SubscriptionRequest(arg) {
  if (!(arg instanceof io_common_integration_pb.SubscriptionRequest)) {
    throw new Error('Expected argument of type io.SubscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_SubscriptionRequest(buffer_arg) {
  return io_common_integration_pb.SubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_TeamMemberPermissions(arg) {
  if (!(arg instanceof io_user_user_pb.TeamMemberPermissions)) {
    throw new Error('Expected argument of type io.TeamMemberPermissions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_TeamMemberPermissions(buffer_arg) {
  return io_user_user_pb.TeamMemberPermissions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Url(arg) {
  if (!(arg instanceof io_common_common_objects_pb.Url)) {
    throw new Error('Expected argument of type io.Url');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Url(buffer_arg) {
  return io_common_common_objects_pb.Url.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_Username(arg) {
  if (!(arg instanceof io_user_user_pb.Username)) {
    throw new Error('Expected argument of type io.Username');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_Username(buffer_arg) {
  return io_user_user_pb.Username.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_VerifyRequest(arg) {
  if (!(arg instanceof io_user_user_pb.VerifyRequest)) {
    throw new Error('Expected argument of type io.VerifyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_VerifyRequest(buffer_arg) {
  return io_user_user_pb.VerifyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  createUser: {
    path: '/io.Users/createUser',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.NewUser,
    responseType: io_user_user_pb.NewUserResponse,
    requestSerialize: serialize_io_NewUser,
    requestDeserialize: deserialize_io_NewUser,
    responseSerialize: serialize_io_NewUserResponse,
    responseDeserialize: deserialize_io_NewUserResponse,
  },
  newUser: {
    path: '/io.Users/newUser',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.NewUser,
    responseType: io_user_user_pb.JWT,
    requestSerialize: serialize_io_NewUser,
    requestDeserialize: deserialize_io_NewUser,
    responseSerialize: serialize_io_JWT,
    responseDeserialize: deserialize_io_JWT,
  },
  verify: {
    path: '/io.Users/verify',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.VerifyRequest,
    responseType: io_common_common_objects_pb.Boolean,
    requestSerialize: serialize_io_VerifyRequest,
    requestDeserialize: deserialize_io_VerifyRequest,
    responseSerialize: serialize_io_Boolean,
    responseDeserialize: deserialize_io_Boolean,
  },
  resendVerificationEmail: {
    path: '/io.Users/resendVerificationEmail',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: io_common_common_objects_pb.Boolean,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_io_Boolean,
    responseDeserialize: deserialize_io_Boolean,
  },
  getUser: {
    path: '/io.Users/getUser',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: io_user_user_pb.GetUserResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_io_GetUserResponse,
    responseDeserialize: deserialize_io_GetUserResponse,
  },
  login: {
    path: '/io.Users/login',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.Credentials,
    responseType: io_user_user_pb.JWT,
    requestSerialize: serialize_io_Credentials,
    requestDeserialize: deserialize_io_Credentials,
    responseSerialize: serialize_io_JWT,
    responseDeserialize: deserialize_io_JWT,
  },
  get2faBarcode: {
    path: '/io.Users/get2faBarcode',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: io_common_common_objects_pb.Url,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_io_Url,
    responseDeserialize: deserialize_io_Url,
  },
  resetPassword: {
    path: '/io.Users/resetPassword',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.Credentials,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Credentials,
    requestDeserialize: deserialize_io_Credentials,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  sendPasswordResetLink: {
    path: '/io.Users/sendPasswordResetLink',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.Username,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Username,
    requestDeserialize: deserialize_io_Username,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  changePassword: {
    path: '/io.Users/changePassword',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.PasswordResetInput,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_PasswordResetInput,
    requestDeserialize: deserialize_io_PasswordResetInput,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  changeEmail: {
    path: '/io.Users/changeEmail',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.Email,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Email,
    requestDeserialize: deserialize_io_Email,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  confirmEmailChange: {
    path: '/io.Users/confirmEmailChange',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.ConfirmEmailChangeInput,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_ConfirmEmailChangeInput,
    requestDeserialize: deserialize_io_ConfirmEmailChangeInput,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateCompanyName: {
    path: '/io.Users/updateCompanyName',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.CompanyName,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_CompanyName,
    requestDeserialize: deserialize_io_CompanyName,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getProjectsForUserQueryDeprecated: {
    path: '/io.Users/getProjectsForUserQueryDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_project_pb.Project,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_Project,
    responseDeserialize: deserialize_io_Project,
  },
  getProjectsQueryDeprecated: {
    path: '/io.Users/getProjectsQueryDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_common_pagination_pb.Pagination,
    responseType: io_common_project_pb.Project,
    requestSerialize: serialize_io_Pagination,
    requestDeserialize: deserialize_io_Pagination,
    responseSerialize: serialize_io_Project,
    responseDeserialize: deserialize_io_Project,
  },
  getProjectsForUserQuery: {
    path: '/io.Users/getProjectsForUserQuery',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_project_pb.Project,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_Project,
    responseDeserialize: deserialize_io_Project,
  },
  getProjectsQuery: {
    path: '/io.Users/getProjectsQuery',
    requestStream: false,
    responseStream: true,
    requestType: io_common_filter_pb.Filters,
    responseType: io_common_project_pb.Project,
    requestSerialize: serialize_io_Filters,
    requestDeserialize: deserialize_io_Filters,
    responseSerialize: serialize_io_Project,
    responseDeserialize: deserialize_io_Project,
  },
  getProjectByUuid: {
    path: '/io.Users/getProjectByUuid',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_project_pb.Project,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_Project,
    responseDeserialize: deserialize_io_Project,
  },
  getProjectAndTemplateByShortCode: {
    path: '/io.Users/getProjectAndTemplateByShortCode',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_project_pb.ProjectByShortCodeResult,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_ProjectByShortCodeResult,
    responseDeserialize: deserialize_io_ProjectByShortCodeResult,
  },
  getProjectsForUser: {
    path: '/io.Users/getProjectsForUser',
    requestStream: false,
    responseStream: true,
    requestType: io_common_project_pb.ProjectStatusFilter,
    responseType: io_common_project_pb.Project,
    requestSerialize: serialize_io_ProjectStatusFilter,
    requestDeserialize: deserialize_io_ProjectStatusFilter,
    responseSerialize: serialize_io_Project,
    responseDeserialize: deserialize_io_Project,
  },
  getProjects: {
    path: '/io.Users/getProjects',
    requestStream: false,
    responseStream: true,
    requestType: io_common_project_pb.ProjectStatusFilter,
    responseType: io_common_project_pb.Project,
    requestSerialize: serialize_io_ProjectStatusFilter,
    requestDeserialize: deserialize_io_ProjectStatusFilter,
    responseSerialize: serialize_io_Project,
    responseDeserialize: deserialize_io_Project,
  },
  getScannerConfig: {
    path: '/io.Users/getScannerConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: io_user_user_pb.ScannerConfiguration,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_io_ScannerConfiguration,
    responseDeserialize: deserialize_io_ScannerConfiguration,
  },
  createScannerConfig: {
    path: '/io.Users/createScannerConfig',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.ScannerConfiguration,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_ScannerConfiguration,
    requestDeserialize: deserialize_io_ScannerConfiguration,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateScannerConfig: {
    path: '/io.Users/updateScannerConfig',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.ScannerConfiguration,
    responseType: io_user_user_pb.ScannerConfiguration,
    requestSerialize: serialize_io_ScannerConfiguration,
    requestDeserialize: deserialize_io_ScannerConfiguration,
    responseSerialize: serialize_io_ScannerConfiguration,
    responseDeserialize: deserialize_io_ScannerConfiguration,
  },
  // Creates a new oauth2 resource, the returned id is NOT the access token used to make requests on the users behalf.
createAuthorizationResource: {
    path: '/io.Users/createAuthorizationResource',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.OAuth2AuthorizationRequest,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_OAuth2AuthorizationRequest,
    requestDeserialize: deserialize_io_OAuth2AuthorizationRequest,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  deleteAuthorizationResource: {
    path: '/io.Users/deleteAuthorizationResource',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  refreshApiSecret: {
    path: '/io.Users/refreshApiSecret',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteAccount: {
    path: '/io.Users/deleteAccount',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.DeleteAccountRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_DeleteAccountRequest,
    requestDeserialize: deserialize_io_DeleteAccountRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  revokeLegacyCredentials: {
    path: '/io.Users/revokeLegacyCredentials',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Team Members
createTeamMember: {
    path: '/io.Users/createTeamMember',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.NewTeamMember,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_NewTeamMember,
    requestDeserialize: deserialize_io_NewTeamMember,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  createPermissionsForTeamMember: {
    path: '/io.Users/createPermissionsForTeamMember',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.TeamMemberPermissions,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_TeamMemberPermissions,
    requestDeserialize: deserialize_io_TeamMemberPermissions,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  updateTeamMemberPermissions: {
    path: '/io.Users/updateTeamMemberPermissions',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.TeamMemberPermissions,
    responseType: io_user_user_pb.TeamMemberPermissions,
    requestSerialize: serialize_io_TeamMemberPermissions,
    requestDeserialize: deserialize_io_TeamMemberPermissions,
    responseSerialize: serialize_io_TeamMemberPermissions,
    responseDeserialize: deserialize_io_TeamMemberPermissions,
  },
  patchTeamMemberPermissions: {
    path: '/io.Users/patchTeamMemberPermissions',
    requestStream: false,
    responseStream: false,
    requestType: io_user_user_pb.TeamMemberPermissions,
    responseType: io_user_user_pb.TeamMemberPermissions,
    requestSerialize: serialize_io_TeamMemberPermissions,
    requestDeserialize: deserialize_io_TeamMemberPermissions,
    responseSerialize: serialize_io_TeamMemberPermissions,
    responseDeserialize: deserialize_io_TeamMemberPermissions,
  },
  getTeamMember: {
    path: '/io.Users/getTeamMember',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_user_user_pb.GetTeamMemberResponse,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_GetTeamMemberResponse,
    responseDeserialize: deserialize_io_GetTeamMemberResponse,
  },
  getTeamMembers: {
    path: '/io.Users/getTeamMembers',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: io_user_user_pb.ListTeamMembersResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_io_ListTeamMembersResponse,
    responseDeserialize: deserialize_io_ListTeamMembersResponse,
  },
  deleteTeamMember: {
    path: '/io.Users/deleteTeamMember',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getTeamMemberLogs: {
    path: '/io.Users/getTeamMemberLogs',
    requestStream: false,
    responseStream: true,
    requestType: io_user_user_pb.AuditLogRequest,
    responseType: io_user_user_pb.AuditLog,
    requestSerialize: serialize_io_AuditLogRequest,
    requestDeserialize: deserialize_io_AuditLogRequest,
    responseSerialize: serialize_io_AuditLog,
    responseDeserialize: deserialize_io_AuditLog,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService, 'Users');
var IntegrationsService = exports.IntegrationsService = {
  createIntegrations: {
    path: '/io.Integrations/createIntegrations',
    requestStream: false,
    responseStream: false,
    requestType: io_common_integration_pb.IntegrationConfigs,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_IntegrationConfigs,
    requestDeserialize: deserialize_io_IntegrationConfigs,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  getIntegrations: {
    path: '/io.Integrations/getIntegrations',
    requestStream: false,
    responseStream: false,
    requestType: io_common_integration_pb.ProtocolIdInput,
    responseType: io_common_integration_pb.IntegrationConfigs,
    requestSerialize: serialize_io_ProtocolIdInput,
    requestDeserialize: deserialize_io_ProtocolIdInput,
    responseSerialize: serialize_io_IntegrationConfigs,
    responseDeserialize: deserialize_io_IntegrationConfigs,
  },
  updateIntegrations: {
    path: '/io.Integrations/updateIntegrations',
    requestStream: false,
    responseStream: false,
    requestType: io_common_integration_pb.IntegrationConfigs,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_IntegrationConfigs,
    requestDeserialize: deserialize_io_IntegrationConfigs,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  deleteIntegrations: {
    path: '/io.Integrations/deleteIntegrations',
    requestStream: false,
    responseStream: false,
    requestType: io_common_integration_pb.ProtocolIdInput,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_ProtocolIdInput,
    requestDeserialize: deserialize_io_ProtocolIdInput,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  createSinkSubscription: {
    path: '/io.Integrations/createSinkSubscription',
    requestStream: false,
    responseStream: false,
    requestType: io_common_integration_pb.SinkSubscription,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_SinkSubscription,
    requestDeserialize: deserialize_io_SinkSubscription,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  getSinkSubscription: {
    path: '/io.Integrations/getSinkSubscription',
    requestStream: false,
    responseStream: false,
    requestType: io_common_integration_pb.SubscriptionRequest,
    responseType: io_common_integration_pb.SinkSubscription,
    requestSerialize: serialize_io_SubscriptionRequest,
    requestDeserialize: deserialize_io_SubscriptionRequest,
    responseSerialize: serialize_io_SinkSubscription,
    responseDeserialize: deserialize_io_SinkSubscription,
  },
  listSinkSubscriptionsDeprecated: {
    path: '/io.Integrations/listSinkSubscriptionsDeprecated',
    requestStream: false,
    responseStream: true,
    requestType: io_common_common_objects_pb.ListRequestDeprecated,
    responseType: io_common_integration_pb.SinkSubscription,
    requestSerialize: serialize_io_ListRequestDeprecated,
    requestDeserialize: deserialize_io_ListRequestDeprecated,
    responseSerialize: serialize_io_SinkSubscription,
    responseDeserialize: deserialize_io_SinkSubscription,
  },
  listSinkSubscriptions: {
    path: '/io.Integrations/listSinkSubscriptions',
    requestStream: false,
    responseStream: true,
    requestType: io_common_common_objects_pb.ListRequest,
    responseType: io_common_integration_pb.SinkSubscription,
    requestSerialize: serialize_io_ListRequest,
    requestDeserialize: deserialize_io_ListRequest,
    responseSerialize: serialize_io_SinkSubscription,
    responseDeserialize: deserialize_io_SinkSubscription,
  },
  updateSinkSubscription: {
    path: '/io.Integrations/updateSinkSubscription',
    requestStream: false,
    responseStream: false,
    requestType: io_common_integration_pb.SinkSubscription,
    responseType: io_common_common_objects_pb.Id,
    requestSerialize: serialize_io_SinkSubscription,
    requestDeserialize: deserialize_io_SinkSubscription,
    responseSerialize: serialize_io_Id,
    responseDeserialize: deserialize_io_Id,
  },
  deleteSinkSubscription: {
    path: '/io.Integrations/deleteSinkSubscription',
    requestStream: false,
    responseStream: false,
    requestType: io_common_integration_pb.SubscriptionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_SubscriptionRequest,
    requestDeserialize: deserialize_io_SubscriptionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getSampleSubscriptionEvent: {
    path: '/io.Integrations/getSampleSubscriptionEvent',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: io_common_integration_pb.SinkSubscription,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_io_SinkSubscription,
    responseDeserialize: deserialize_io_SinkSubscription,
  },
  callDynamicApi: {
    path: '/io.Integrations/callDynamicApi',
    requestStream: false,
    responseStream: false,
    requestType: io_common_integration_pb.DynamicApiInput,
    responseType: io_common_integration_pb.DynamicApiResponse,
    requestSerialize: serialize_io_DynamicApiInput,
    requestDeserialize: deserialize_io_DynamicApiInput,
    responseSerialize: serialize_io_DynamicApiResponse,
    responseDeserialize: deserialize_io_DynamicApiResponse,
  },
};

exports.IntegrationsClient = grpc.makeGenericClientConstructor(IntegrationsService, 'Integrations');
