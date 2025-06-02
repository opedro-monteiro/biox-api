import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { ZodSchema, ZodError } from 'zod'

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    const result = this.schema.safeParse(value)

    if (!result.success) {
      const formattedErrors = this.formatErrors(result.error)
      throw new BadRequestException({
        message: 'Validation failed',
        errors: formattedErrors,
      })
    }

    return result.data
  }

  private formatErrors(error: ZodError) {
    return error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message,
    }))
  }
}
