// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// Scheduler RPC
//
// The PassKit Scheduler API lets you schedule a job.
'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var io_common_common_objects_pb = require('../../io/common/common_objects_pb.js');
var io_scheduler_scheduler_pb = require('../../io/scheduler/scheduler_pb.js');
var ct_scheduler_scheduler_pb = require('../../ct/scheduler/scheduler_pb.js');

function serialize_ct_JobHistory(arg) {
  if (!(arg instanceof ct_scheduler_scheduler_pb.JobHistory)) {
    throw new Error('Expected argument of type ct.JobHistory');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ct_JobHistory(buffer_arg) {
  return ct_scheduler_scheduler_pb.JobHistory.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ct_SchedulingJob(arg) {
  if (!(arg instanceof ct_scheduler_scheduler_pb.SchedulingJob)) {
    throw new Error('Expected argument of type ct.SchedulingJob');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ct_SchedulingJob(buffer_arg) {
  return ct_scheduler_scheduler_pb.SchedulingJob.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ct_SchedulingJobResponse(arg) {
  if (!(arg instanceof ct_scheduler_scheduler_pb.SchedulingJobResponse)) {
    throw new Error('Expected argument of type ct.SchedulingJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ct_SchedulingJobResponse(buffer_arg) {
  return ct_scheduler_scheduler_pb.SchedulingJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_scheduler_ListRequest(arg) {
  if (!(arg instanceof io_scheduler_scheduler_pb.ListRequest)) {
    throw new Error('Expected argument of type scheduler.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_ListRequest(buffer_arg) {
  return io_scheduler_scheduler_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The PassKit Scheduler API allows you to automate tasks within your PassKit programs. This API allows you to schedule one-time or recurring jobs that interact with other PassKit APIs.
var SchedulerService = exports.SchedulerService = {
  // Creates a scheduling job. Required Fields: scheduleType, protocol, classId, jobName, scheduledTime, timezone.
createSchedulingJob: {
    path: '/scheduler.Scheduler/createSchedulingJob',
    requestStream: false,
    responseStream: false,
    requestType: ct_scheduler_scheduler_pb.SchedulingJob,
    responseType: ct_scheduler_scheduler_pb.SchedulingJobResponse,
    requestSerialize: serialize_ct_SchedulingJob,
    requestDeserialize: deserialize_ct_SchedulingJob,
    responseSerialize: serialize_ct_SchedulingJobResponse,
    responseDeserialize: deserialize_ct_SchedulingJobResponse,
  },
  // Retrieves a scheduling job by its ID. If the job has been deleted, only history logs will be returned. Required Fields: id.
getSchedulingJob: {
    path: '/scheduler.Scheduler/getSchedulingJob',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: ct_scheduler_scheduler_pb.SchedulingJob,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_ct_SchedulingJob,
    responseDeserialize: deserialize_ct_SchedulingJob,
  },
  // Updates an existing scheduling job. The full SchedulingJob object must be supplied. Empty/null fields will overwrite existing data. Required Fields: id, scheduleType, protocol, classId, jobName, scheduledTime, timezone.
updateSchedulingJob: {
    path: '/scheduler.Scheduler/updateSchedulingJob',
    requestStream: false,
    responseStream: false,
    requestType: ct_scheduler_scheduler_pb.SchedulingJob,
    responseType: ct_scheduler_scheduler_pb.SchedulingJobResponse,
    requestSerialize: serialize_ct_SchedulingJob,
    requestDeserialize: deserialize_ct_SchedulingJob,
    responseSerialize: serialize_ct_SchedulingJobResponse,
    responseDeserialize: deserialize_ct_SchedulingJobResponse,
  },
  // Patch updates a scheduling job. Only supplied fields will be updated. Required Fields: id.
patchSchedulingJob: {
    path: '/scheduler.Scheduler/patchSchedulingJob',
    requestStream: false,
    responseStream: false,
    requestType: ct_scheduler_scheduler_pb.SchedulingJob,
    responseType: ct_scheduler_scheduler_pb.SchedulingJobResponse,
    requestSerialize: serialize_ct_SchedulingJob,
    requestDeserialize: deserialize_ct_SchedulingJob,
    responseSerialize: serialize_ct_SchedulingJobResponse,
    responseDeserialize: deserialize_ct_SchedulingJobResponse,
  },
  // Deletes a scheduling job by ID. History logs remain available after deletion. Required Fields: id.
deleteSchedulingJob: {
    path: '/scheduler.Scheduler/deleteSchedulingJob',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Retrieves a specific scheduling job history log by ID. Required Fields: id.
getSchedulingJobHistory: {
    path: '/scheduler.Scheduler/getSchedulingJobHistory',
    requestStream: false,
    responseStream: false,
    requestType: io_common_common_objects_pb.Id,
    responseType: ct_scheduler_scheduler_pb.JobHistory,
    requestSerialize: serialize_io_Id,
    requestDeserialize: deserialize_io_Id,
    responseSerialize: serialize_ct_JobHistory,
    responseDeserialize: deserialize_ct_JobHistory,
  },
  // Lists all history logs for a given scheduling job. Required Fields: jobId.
listSchedulingJobHistories: {
    path: '/scheduler.Scheduler/listSchedulingJobHistories',
    requestStream: false,
    responseStream: true,
    requestType: io_scheduler_scheduler_pb.ListRequest,
    responseType: ct_scheduler_scheduler_pb.JobHistory,
    requestSerialize: serialize_scheduler_ListRequest,
    requestDeserialize: deserialize_scheduler_ListRequest,
    responseSerialize: serialize_ct_JobHistory,
    responseDeserialize: deserialize_ct_JobHistory,
  },
};

exports.SchedulerClient = grpc.makeGenericClientConstructor(SchedulerService, 'Scheduler');
