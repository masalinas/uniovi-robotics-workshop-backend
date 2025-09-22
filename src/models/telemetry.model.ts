import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Telemetry extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  accX: number;

  @property({
    type: 'number',
    required: true,
  })
  accY: number;

  @property({
    type: 'number',
    required: true,
  })
  accZ: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Telemetry>) {
    super(data);
  }
}

export interface TelemetryRelations {
  // describe navigational properties here
}

export type TelemetryWithRelations = Telemetry & TelemetryRelations;
