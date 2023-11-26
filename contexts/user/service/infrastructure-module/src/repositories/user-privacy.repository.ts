import { EntityRepository }                         from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { Injectable }                               from '@nestjs/common'

import { PrivacyKeyRules, PrivacyRule }                    from '@chats-system/user-rpc'

import { PrivacyKeyType, PrivacyRuleType } from '@chats-system/user-rpc'
import { UserPrivacyEntity }                               from '../entities/index.js'

@Injectable()
export class UserPrivacyRepository {
  constructor(
    @InjectRepository(UserPrivacyEntity)
    private readonly userPrivacyRepository: EntityRepository<UserPrivacyEntity>,
  ) {}

  async getByUserIdAndKeyType(userId: bigint, keyType: PrivacyKeyType): Promise<PrivacyKeyRules | undefined> {
    const userPrivacyEntity = await this.userPrivacyRepository.findOne({
        userId,
        keyType
    })

    if (!userPrivacyEntity) {
        return undefined
    }
    
    return new PrivacyKeyRules({
        key: userPrivacyEntity.keyType,
        rules: this.makePrivacyRules(userPrivacyEntity)
    })
  }

  async getByUserIdAndKeyTypes(userId: bigint, keyTypes: Array<PrivacyKeyType>): Promise<Array<PrivacyKeyRules>> {
    const userPrivacyEntities = await this.userPrivacyRepository.find({
        userId,
        keyType: {
            $in: keyTypes
        }
    })

    return userPrivacyEntities.map(userPrivacyEntity => new PrivacyKeyRules({
        key: userPrivacyEntity.keyType,
        rules: this.makePrivacyRules(userPrivacyEntity)
    }))
  }

  protected makePrivacyRules(userPrivacyEntity: UserPrivacyEntity): Array<PrivacyRule> {
        if (userPrivacyEntity.rules?.length > 0) {
            return userPrivacyEntity.rules.map(rule => new PrivacyRule(rule))
        }

        if (userPrivacyEntity.keyType === PrivacyKeyType.PHONE_NUMBER) {
            return [
                new PrivacyRule({
                    type: PrivacyRuleType.DISALLOW_ALL
                })
            ]
        }

        return [
            new PrivacyRule({
                type: PrivacyRuleType.ALLOW_ALL
            })
        ]

  }
}
