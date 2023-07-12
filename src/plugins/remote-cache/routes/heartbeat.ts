import type { Server } from 'http'
import type { RawReplyDefaultExpression, RawRequestDefaultExpression, RouteOptions } from 'fastify'
import { type Params, type Querystring } from './schema'

export const getReadiness: RouteOptions<
  Server,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  {
    Querystring: Querystring
    Params: Params
  }
> = {
  method: 'GET',
  url: '/api/readiness',
  logLevel: 'error',
  async handler(req, reply) {
    reply.send({ status: 'ok' })
  },
}

export const getHealthz: RouteOptions<
  Server,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  {
    Querystring: Querystring
    Params: Params
  }
> = {
  method: 'GET',
  url: '/api/healthz',
  logLevel: 'error',
  async handler(req, reply) {
    reply.send({ status: 'ok' })
  },
}
