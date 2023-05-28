import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    {
      id: '1',
      name: 'Marble',
      weapon: 'blade',
    },
    {
      id: '2',
      name: 'Gible',
      weapon: 'stars',
    },
  ];

  getNinjas(weapon?: 'blade' | 'stars') {
    console.log(this.ninjas);

    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }

    return this.ninjas;
  }

  getNinja(id: string) {
    const ninja = this.ninjas.filter((ninja) => ninja.id === id);

    if (!ninja) {
      throw new Error('Ninja not found');
    }

    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: Date.now().toString(),
    };

    this.ninjas.push(newNinja);

    return newNinja;
  }
}
