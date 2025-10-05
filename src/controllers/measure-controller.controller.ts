import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Measure} from '../models';
import {MeasureRepository} from '../repositories';

export class MeasureController {
  constructor(
    @repository(MeasureRepository)
    public measureRepository : MeasureRepository,
  ) {}

  @post('/measures')
  @response(200, {
    description: 'Measure model instance',
    content: {'application/json': {schema: getModelSchemaRef(Measure)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Measure, {
            title: 'NewMeasure',
            exclude: ['id'],
          }),
        },
      },
    })
    measure: Omit<Measure, 'id'>,
  ): Promise<Measure> {
    return this.measureRepository.create(measure);
  }

  @get('/measures/count')
  @response(200, {
    description: 'Measure model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Measure) where?: Where<Measure>,
  ): Promise<Count> {
    return this.measureRepository.count(where);
  }

  @get('/measures')
  @response(200, {
    description: 'Array of Measure model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Measure, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Measure) filter?: Filter<Measure>,
  ): Promise<Measure[]> {
    return this.measureRepository.find(filter);
  }

  @patch('/measures')
  @response(200, {
    description: 'Measure PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Measure, {partial: true}),
        },
      },
    })
    measure: Measure,
    @param.where(Measure) where?: Where<Measure>,
  ): Promise<Count> {
    return this.measureRepository.updateAll(measure, where);
  }

  @get('/measures/{id}')
  @response(200, {
    description: 'Measure model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Measure, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Measure, {exclude: 'where'}) filter?: FilterExcludingWhere<Measure>
  ): Promise<Measure> {
    return this.measureRepository.findById(id, filter);
  }

  @patch('/measures/{id}')
  @response(204, {
    description: 'Measure PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Measure, {partial: true}),
        },
      },
    })
    measure: Measure,
  ): Promise<void> {
    await this.measureRepository.updateById(id, measure);
  }

  @put('/measures/{id}')
  @response(204, {
    description: 'Measure PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() measure: Measure,
  ): Promise<void> {
    await this.measureRepository.replaceById(id, measure);
  }

  @del('/measures/{id}')
  @response(204, {
    description: 'Measure DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.measureRepository.deleteById(id);
  }
}
