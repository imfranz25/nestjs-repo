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
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas?type=fast --> []
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
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
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
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
