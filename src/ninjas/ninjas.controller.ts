import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Body,
  Patch,
  NotFoundException,
  ValidationPipe,
} from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {}

  // GET /ninjas?type=fast --> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'blade' | 'stars') {
    try {
      return this.ninjaService.getNinjas(weapon);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  // GET /ninjas/:id --> {}
  @Get(':id')
  getNinja(@Param('id') id: string) {
    return {
      id,
    };
  }

  // POST /ninjas --> {}
  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    const { name } = createNinjaDto;

    return {
      name,
    };
  }

  // Patch /ninjas/:id --> {}
  @Patch(':id')
  updateNinja(@Param('id') id: string, @Body() createNinjaDto: CreateNinjaDto) {
    const { name } = createNinjaDto;

    return {
      id,
      name,
    };
  }

  // DELETE /ninjas:id --> {}
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
}
