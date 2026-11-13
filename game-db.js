// Editable game database. JSON-compatible data only; runtime logic stays in index.html.
window.GAME_DB = {
  "_docs": {
    "title": "SCRAPWAKE · 폭주 항로 · 콘텐츠 DB",
    "editing": "게임 데이터 원본은 game-db.js 하나입니다. 현행 전투는 naval, 영구 성장과 장비는 campaign, 계급은 campaign.ranks, 메뉴 문구는 ui에서 검색합니다. 엔진은 index.html에 있고 DB를 먼저 동기 로드합니다.",
    "files": "index.html은 엔진과 화면을 포함하고 이 DB를 먼저 동기 로드합니다. DB 수정은 해당 키를 검색해 필요한 범위만 읽습니다.",
    "rigs": "rigs 배열: id,name,description,tag,color,icon,weaponId,stats. stats는 config.baseStats에 덮어씁니다.",
    "weapons": "weapons 객체: mode=projectile|beam, damage,interval,range는 player stats.range, count,spread,speed,radius,pierce,chain. 기체 weaponId로 연결합니다.",
    "enemies": "enemies 객체: behavior=seek|strafe|charge|artillery, hp,speed,radius,contactDamage,xp,scrap. charge는 돌진 파라미터, shot은 탄막 파라미터입니다. waves.pool 또는 world.startEnemies에서 참조합니다.",
    "upgrades": "upgrades 배열: id,name,description,maxStacks,tag,icon,color,stats:[{stat,op:add|multiply,value}],heal?,scrap?. stat은 config.baseStats의 키입니다. 한계에 도달한 항목은 제안에서 제외됩니다.",
    "relays": "relays 배열의 좌표·반경·점령 시간·회복·고철 보상 수정 가능. 모든 거점을 어떤 순서로든 점령하면 config.bossType이 등장합니다.",
    "rules": "산술 0/1, 수학적 원주율, 상태 판별과 충돌 연산은 실행 구조입니다. 게임 수치·초깃값·계수·게임 콘텐츠는 이 DB에 둡니다.",
    "objective": "이동하며 3개 중계기를 수리하고, 추격 요새를 격파한 후 탈출 지점에서 구조를 기다립니다. 전투는 실시간이며 성장 선택 중에는 자동 정지합니다.",
    "scrapArmor": "고철은 자력 궤도에서 근처 적을 공격하고, baseStats.scrapArmor 계수에 따라 받는 피해도 줄입니다. floor(고철 수 × 계수), 최대 config.scrapArmorCap. 고철 폭풍으로 소비하면 이 방어력도 즉시 감소합니다.",
    "interface": "ui에는 화면 문구, 단축키, 색상, 아이콘, 시각 효과 설정, 저장 키가 있습니다. 수치와 콘텐츠 수정 시 game-db.js를 먼저 검색합니다.",
    "standalone": "DB 편집기에서 DB 파일 또는 모든 코드·데이터가 포함된 단일 HTML 실행본을 내보낼 수 있습니다.",
    "campaign": "영구 계급·선박 정비·연구·동료 편성·분기 해역·작전 보상. 성공·귀항·침몰 후에도 유지하며 새 게임에서만 초기화합니다.",
    "naval": "현행 해상전: config/주요 수치, carrier/modules/보물선과 약점, enemies/공격 예고와 역할, currents/해류, contracts/약탈·구조·현상금·인양, roles/동료 상호작용, milestones/즉시 영구 보상, text/messages/문구. 고철은 수리·방패·압축탄의 공통 자원이고 잔해는 방패·투척탄·고철 중 선택합니다."
  },
  "meta": {
    "title": "폭주 항로",
    "english": "SCRAPWAKE",
    "tagline": "멈추지 마라. 잔해를 무기로 바꿔라.",
    "objective": "화약선 폭파 → 잔해 무기화 → 보물선 금고 약탈 → 해류를 타고 귀항 → 영구 강화",
    "description": "난파선을 방패·투척탄·수리 자금으로 바꾸는 해상 약탈 액션.",
    "extractionName": "긴급 탈출 항로",
    "version": "5.0"
  },
  "palette": {
    "bg": "#101a23",
    "ink": "#e7f1ed",
    "muted": "#7d9ba7",
    "cyan": "#8ef0cf",
    "gold": "#f3c275",
    "danger": "#ff866c",
    "violet": "#c6a3f0",
    "water": "#172b38"
  },
  "config": {
    "saveVersion": 2,
    "worldWidth": 2400,
    "worldHeight": 1800,
    "defaultRig": "skimmer",
    "defaultSeed": "SCRAP-01",
    "playerRadius": 20,
    "startLevel": 1,
    "startScrap": 4,
    "startAngle": -1.5707963267948966,
    "startInvulnerability": 2,
    "firstWaveDelay": 2.5,
    "maxFrame": 0.05,
    "random": {
      "offset": 2166136261,
      "prime": 16777619,
      "multiplier": 1664525,
      "increment": 1013904223,
      "modulus": 4294967296
    },
    "eventLimit": 6,
    "pickupLimit": 180,
    "pickupLife": 75,
    "projectileLimit": 280,
    "enemyLimit": 54,
    "maxWaveSize": 8,
    "spawnRadiusMin": 560,
    "spawnRadiusMax": 720,
    "relayWaveBonus": 1,
    "relayEnemyHpBonus": 0.08,
    "bossWaveIntervalMultiplier": 2.1,
    "bossType": "dreadnought",
    "bossShake": 14,
    "killShake": 1.5,
    "bossSpawnShake": 15,
    "deathEffectScale": 2.2,
    "hitFlash": 0.14,
    "minimumDamage": 1,
    "hitInvulnerability": 0.52,
    "playerHitRadius": 54,
    "playerHitShake": 8,
    "playerKnockback": 12,
    "muzzleOffset": 23,
    "comboTime": 3.8,
    "comboCap": 12,
    "comboXpBonus": 0.018,
    "dropSpread": 17,
    "movingThreshold": 0.35,
    "strafeTolerance": 55,
    "enemySeparation": 0.28,
    "scrapCap": 12,
    "orbitDamageCap": 4,
    "burstExtraCap": 3,
    "burstExtraPower": 0.22,
    "burstBasePower": 0.55,
    "burstScrapPower": 0.25,
    "burstPickupRange": 140,
    "burstShake": 10,
    "dashShake": 3,
    "mineSpacing": 33,
    "mineArm": 0.35,
    "mineTriggerMargin": 12,
    "pickupPullSpeed": 580,
    "pickupMinSpeed": 150,
    "pickupCollectRadius": 28,
    "rockHitRadius": 9,
    "turretRadius": 18,
    "turretSpawnRadius": 44,
    "turretShotSpeed": 670,
    "turretShotRadius": 4,
    "turretShotLife": 1.1,
    "droneOrbitSpeed": 1.35,
    "droneOrbitRadius": 55,
    "droneShotSpeed": 650,
    "droneShotRadius": 3,
    "droneShotLife": 1.1,
    "upgradeChoices": 3,
    "contestedCaptureMultiplier": 0.55,
    "extractionTime": 4,
    "extractionDecay": 0.12,
    "xpBase": 8,
    "xpGrowth": 7,
    "levelHp": 3,
    "levelHeal": 5,
    "playerTimers": [
      "fireCd",
      "dashCd",
      "burstCd",
      "turretCd",
      "invuln"
    ],
    "baseStats": {
      "maxHp": 100,
      "maxShield": 24,
      "speed": 245,
      "acceleration": 12,
      "shieldDelay": 4,
      "shieldRegen": 5,
      "damage": 1,
      "fireRate": 1,
      "range": 570,
      "projectileSpeed": 1,
      "projectileCount": 0,
      "spreadBonus": 0,
      "pierce": 0,
      "critChance": 0.08,
      "critMultiplier": 1.8,
      "armor": 0,
      "movingDamage": 0,
      "pickupRadius": 125,
      "dashCooldown": 3.3,
      "dashSpeed": 820,
      "dashDuration": 0.24,
      "dashDamage": 20,
      "dashRadius": 44,
      "dashInvuln": 0.45,
      "dashKnockback": 65,
      "burstCooldown": 7,
      "burstCost": 3,
      "burstDamage": 26,
      "burstRadius": 205,
      "burstKnockback": 85,
      "turretCooldown": 15,
      "turretDuration": 12,
      "turretDamage": 9,
      "turretRate": 0.5,
      "turretRange": 420,
      "turretHp": 55,
      "chainCount": 0,
      "chainRange": 180,
      "chainDamage": 0.55,
      "orbitDamage": 2,
      "orbitSpeed": 1.9,
      "orbitRadius": 52,
      "orbitTick": 0.7,
      "droneCount": 0,
      "droneRate": 0.7,
      "droneDamage": 7,
      "mineCount": 0,
      "mineDamage": 38,
      "mineRadius": 75,
      "mineLife": 14,
      "killHeal": 0,
      "killShield": 0,
      "relaySpeed": 1,
      "splashRadius": 0,
      "splashDamage": 0.5,
      "scrapArmor": 0.25,
      "operationIncome": 0,
      "operationSalvage": 0,
      "operationMovement": 0,
      "operationGrapple": 0,
      "operationTurn": 0,
      "operationThrowSpeed": 0,
      "operationCargoDrag": 0,
      "operationThrowDamage": 0,
      "operationThrowBlast": 0,
      "operationKillShield": 0
    },
    "turretAggroRadius": 420,
    "turretAggroBias": 1.35,
    "defaultAutoFire": true,
    "scrapArmorCap": 3
  },
  "rigs": [
    {
      "id": "skimmer",
      "name": "고속 포격선",
      "description": "빠른 항해와 짧은 재장전. 물살을 타며 적의 포격을 흘리고 화물을 약탈합니다.",
      "tag": "기동 · 연사 · 균형",
      "color": "#8ef0cf",
      "icon": "speed",
      "weaponId": "repeater",
      "stats": {
        "speed": 270,
        "dashCooldown": 2.8,
        "movingDamage": 0.1
      }
    },
    {
      "id": "breaker",
      "name": "중장갑 산탄선",
      "description": "튼튼한 선체와 산탄 일제사격. 가까이 붙어 금고와 호위선을 한꺼번에 부숩니다.",
      "tag": "산탄 · 돌진 · 장갑",
      "color": "#f3c275",
      "icon": "armor",
      "weaponId": "scatter",
      "stats": {
        "maxHp": 130,
        "maxShield": 32,
        "speed": 220,
        "armor": 1,
        "dashDamage": 34,
        "burstDamage": 32
      }
    },
    {
      "id": "volta",
      "name": "연쇄 전격선",
      "description": "전격 함포로 여러 배를 동시에 타격합니다. 물 위에 밀집한 적을 연쇄 공격합니다.",
      "tag": "연쇄 · 지원 · 사거리",
      "color": "#c6a3f0",
      "icon": "bolt",
      "weaponId": "arc",
      "stats": {
        "maxHp": 90,
        "maxShield": 20,
        "range": 610,
        "turretCooldown": 12,
        "pickupRadius": 155
      }
    }
  ],
  "abilities": {
    "dash": {
      "id": "dash",
      "name": "충각 부스트",
      "description": "이동 방향으로 순간 가속합니다. 짧은 무적 시간 동안 적을 들이받아 피해를 줍니다.",
      "icon": "speed",
      "key": "SPACE",
      "op": "dash",
      "cooldownKey": "dashCd",
      "statCooldown": "dashCooldown",
      "cooldown": 3.3
    },
    "burst": {
      "id": "burst",
      "name": "고철 폭풍",
      "description": "주변 적과 탄환을 밀어내고 잔해를 끌어옵니다. 최대 6개 고철을 소비하면 피해가 크게 증가합니다. 고철이 없어도 약한 파동을 사용할 수 있습니다.",
      "icon": "burst",
      "key": "E",
      "op": "burst",
      "cooldownKey": "burstCd",
      "statCooldown": "burstCooldown",
      "cooldown": 7,
      "costStat": "burstCost"
    },
    "turret": {
      "id": "turret",
      "name": "미끼 포탑",
      "description": "현재 위치에 자동 포탑을 설치합니다. 포탑이 쏘는 동안 중계기를 점령하거나 안전한 경로로 이동하세요.",
      "icon": "turret",
      "key": "Q",
      "op": "turret",
      "cooldownKey": "turretCd",
      "statCooldown": "turretCooldown",
      "cooldown": 15
    }
  },
  "weapons": {
    "repeater": {
      "name": "함포",
      "mode": "projectile",
      "damage": 10,
      "interval": 0.19,
      "count": 1,
      "spread": 0,
      "speed": 830,
      "radius": 4,
      "pierce": 0,
      "chain": 0,
      "color": "#8ef0cf",
      "icon": "weapon"
    },
    "scatter": {
      "name": "산탄 함포",
      "mode": "projectile",
      "damage": 7,
      "interval": 0.65,
      "count": 5,
      "spread": 0.47,
      "speed": 740,
      "radius": 4.5,
      "pierce": 0,
      "chain": 0,
      "color": "#f3c275",
      "icon": "weapon"
    },
    "arc": {
      "name": "전격 함포",
      "mode": "beam",
      "damage": 15,
      "interval": 0.52,
      "count": 1,
      "spread": 0,
      "speed": 1,
      "radius": 1,
      "pierce": 0,
      "chain": 1,
      "aimCone": 0.16,
      "color": "#c6a3f0",
      "icon": "bolt"
    }
  },
  "enemies": {
    "raider": {
      "hp": 23,
      "speed": 112,
      "radius": 17,
      "contactDamage": 10,
      "contactInterval": 0.9,
      "xp": 3,
      "scrap": 1,
      "healChance": 0.08,
      "heal": 8,
      "initialCooldown": 1.1,
      "color": "#ff866c",
      "shape": "arrow",
      "behavior": "seek",
      "attackInterval": 2,
      "preferredRange": 250,
      "strafe": 0.45,
      "shotRange": 550,
      "name": "붉은 추격선",
      "description": "곧장 추격하는 기동선. 부스트로 뚫고 고철을 회수하세요."
    },
    "gunner": {
      "hp": 33,
      "speed": 92,
      "radius": 20,
      "contactDamage": 8,
      "contactInterval": 0.9,
      "xp": 4,
      "scrap": 2,
      "healChance": 0.08,
      "heal": 8,
      "initialCooldown": 1.1,
      "color": "#e9a5a7",
      "shape": "hull",
      "behavior": "strafe",
      "attackInterval": 2.2,
      "preferredRange": 250,
      "strafe": 0.45,
      "shotRange": 550,
      "name": "측면 포격선",
      "description": "거리를 유지하며 사격합니다. 잔해 뒤로 탄환을 흘리세요.",
      "shot": {
        "damage": 8,
        "speed": 260,
        "radius": 6,
        "life": 3,
        "count": 1,
        "spread": 0,
        "radialCount": 12
      }
    },
    "rammer": {
      "hp": 52,
      "speed": 86,
      "radius": 24,
      "contactDamage": 19,
      "contactInterval": 0.9,
      "xp": 6,
      "scrap": 2,
      "healChance": 0.08,
      "heal": 8,
      "initialCooldown": 1.1,
      "color": "#f3c275",
      "shape": "brute",
      "behavior": "charge",
      "attackInterval": 2.8,
      "preferredRange": 250,
      "strafe": 0.45,
      "shotRange": 550,
      "name": "충각 사냥꾼",
      "description": "빛나는 사선 뒤에 돌진합니다. 옆으로 피하거나 부스트로 통과하세요.",
      "charge": {
        "range": 480,
        "windup": 0.8,
        "duration": 0.55,
        "speed": 560,
        "width": 25
      }
    },
    "mortar": {
      "hp": 60,
      "speed": 66,
      "radius": 24,
      "contactDamage": 12,
      "contactInterval": 0.9,
      "xp": 7,
      "scrap": 2,
      "healChance": 0.08,
      "heal": 8,
      "initialCooldown": 1.1,
      "color": "#c6a3f0",
      "shape": "disc",
      "behavior": "artillery",
      "attackInterval": 3.6,
      "preferredRange": 360,
      "strafe": 0.45,
      "shotRange": 430,
      "name": "방사 지뢰함",
      "description": "충전 후 원형 탄막을 발사합니다. 벌어진 탄환 사이로 빠져나오세요.",
      "windup": 1.0,
      "shot": {
        "damage": 10,
        "speed": 220,
        "radius": 6,
        "life": 3,
        "count": 1,
        "spread": 0,
        "radialCount": 10
      }
    },
    "elite": {
      "hp": 100,
      "speed": 118,
      "radius": 30,
      "contactDamage": 18,
      "contactInterval": 0.9,
      "xp": 10,
      "scrap": 3,
      "healChance": 0.2,
      "heal": 12,
      "initialCooldown": 1.1,
      "color": "#ff725e",
      "shape": "brute",
      "behavior": "seek",
      "attackInterval": 2,
      "preferredRange": 250,
      "strafe": 0.45,
      "shotRange": 550,
      "name": "장갑 절단선",
      "description": "튼튼한 추격선. 포탑과 고철 장갑으로 접근을 벌하세요."
    },
    "dreadnought": {
      "hp": 1500,
      "speed": 70,
      "radius": 68,
      "contactDamage": 28,
      "contactInterval": 0.9,
      "xp": 30,
      "scrap": 8,
      "healChance": 1,
      "heal": 30,
      "initialCooldown": 1.1,
      "color": "#ff866c",
      "shape": "fortress",
      "behavior": "charge",
      "attackInterval": 3,
      "preferredRange": 250,
      "strafe": 0.45,
      "shotRange": 550,
      "name": "추격 요새 · 크라켄",
      "description": "거대한 충각과 방사 탄막을 사용합니다. 포탑을 남기고 옆을 돌며 싸우세요.",
      "boss": true,
      "charge": {
        "range": 850,
        "windup": 1.25,
        "duration": 0.85,
        "speed": 370,
        "width": 65
      },
      "enrageHealth": 0.5,
      "enrageRate": 0.8,
      "enrageSpeed": 1.2,
      "shot": {
        "damage": 12,
        "speed": 245,
        "radius": 6,
        "life": 3,
        "count": 1,
        "spread": 0,
        "radialCount": 16,
        "radialInterval": 4.5
      }
    }
  },
  "upgrades": [
    {
      "id": "hotbarrel",
      "name": "과급 리벳",
      "description": "주무기 공격 속도 +25%. 빠른 사격으로 접근하기 전에 분해합니다.",
      "tag": "연사",
      "icon": "weapon",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "fireRate",
          "op": "add",
          "value": 0.25
        }
      ]
    },
    {
      "id": "fracture",
      "name": "균열 탄두",
      "description": "모든 주무기 피해 +25%. 전격과 산탄에도 적용됩니다.",
      "tag": "화력",
      "icon": "weapon",
      "color": "#f3c275",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "damage",
          "op": "add",
          "value": 0.25
        }
      ]
    },
    {
      "id": "splitter",
      "name": "분열 총구",
      "description": "주무기 발사체 +1, 발사각이 조금 넓어집니다.",
      "tag": "산탄",
      "icon": "weapon",
      "color": "#8ef0cf",
      "maxStacks": 2,
      "stats": [
        {
          "stat": "projectileCount",
          "op": "add",
          "value": 1
        },
        {
          "stat": "spreadBonus",
          "op": "add",
          "value": 0.14
        }
      ],
      "requires": {
        "weaponMode": "projectile"
      }
    },
    {
      "id": "piercer",
      "name": "관통 심",
      "description": "발사체가 적 1기를 추가 관통합니다.",
      "tag": "관통",
      "icon": "weapon",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "pierce",
          "op": "add",
          "value": 1
        }
      ],
      "requires": {
        "weaponMode": "projectile"
      }
    },
    {
      "id": "arcnode",
      "name": "도전성 잔해",
      "description": "공격 적중 시 다른 적에게 1회 연쇄 전격.",
      "tag": "연쇄",
      "icon": "bolt",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "chainCount",
          "op": "add",
          "value": 1
        }
      ]
    },
    {
      "id": "capacitor",
      "name": "고전압 코일",
      "description": "연쇄 전격 사거리 +70, 연쇄 피해 +15%p.",
      "tag": "연쇄",
      "icon": "bolt",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "chainRange",
          "op": "add",
          "value": 70
        },
        {
          "stat": "chainDamage",
          "op": "add",
          "value": 0.15
        }
      ],
      "requires": {
        "any": [
          {
            "stat": "chainCount",
            "min": 1
          },
          {
            "weaponStat": "chain",
            "min": 1
          }
        ]
      }
    },
    {
      "id": "orbital",
      "name": "분쇄 궤도",
      "description": "고철 장갑의 접촉 피해 +3. 고철을 아껴 근접전을 강화합니다.",
      "tag": "고철",
      "icon": "scrap",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "orbitDamage",
          "op": "add",
          "value": 3
        }
      ]
    },
    {
      "id": "magnet",
      "name": "확장 자력장",
      "description": "잔해와 경험치 회수 반경 +65. 위험한 회수 동선을 줄입니다.",
      "tag": "회수",
      "icon": "scrap",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "pickupRadius",
          "op": "add",
          "value": 65
        }
      ]
    },
    {
      "id": "overdrive",
      "name": "질주 사격",
      "description": "움직이는 동안 주무기 피해 +20%.",
      "tag": "기동",
      "icon": "speed",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "movingDamage",
          "op": "add",
          "value": 0.2
        }
      ]
    },
    {
      "id": "afterburner",
      "name": "애프터버너",
      "description": "이동 속도 +12%, 부스트 재사용 시간 -12%.",
      "tag": "기동",
      "icon": "speed",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.12
        },
        {
          "stat": "dashCooldown",
          "op": "multiply",
          "value": 0.88
        }
      ]
    },
    {
      "id": "ramplate",
      "name": "충각 이빨",
      "description": "부스트 충돌 피해 +25. 돌진을 공격 수단으로 바꿉니다.",
      "tag": "충각",
      "icon": "armor",
      "color": "#f3c275",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "dashDamage",
          "op": "add",
          "value": 25
        }
      ]
    },
    {
      "id": "phasefuel",
      "name": "위상 연료",
      "description": "부스트 재사용 시간 -22%. 무적 진입과 탈출이 빨라집니다.",
      "tag": "기동",
      "icon": "speed",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "dashCooldown",
          "op": "multiply",
          "value": 0.78
        }
      ]
    },
    {
      "id": "stormcore",
      "name": "자력 폭심",
      "description": "고철 폭풍 피해 +18, 반경 +35.",
      "tag": "폭발",
      "icon": "burst",
      "color": "#f3c275",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "burstDamage",
          "op": "add",
          "value": 18
        },
        {
          "stat": "burstRadius",
          "op": "add",
          "value": 35
        }
      ]
    },
    {
      "id": "rapidburst",
      "name": "응축 자석",
      "description": "고철 폭풍 재사용 시간 -22%.",
      "tag": "폭발",
      "icon": "burst",
      "color": "#f3c275",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "burstCooldown",
          "op": "multiply",
          "value": 0.78
        }
      ]
    },
    {
      "id": "autoturret",
      "name": "연동 포탑",
      "description": "포탑 피해 +6, 지속 시간 +4초.",
      "tag": "지원",
      "icon": "turret",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "turretDamage",
          "op": "add",
          "value": 6
        },
        {
          "stat": "turretDuration",
          "op": "add",
          "value": 4
        }
      ]
    },
    {
      "id": "sentrynet",
      "name": "접이식 포탑",
      "description": "포탑 재사용 시간 -25%. 점령 지대를 방어하세요.",
      "tag": "지원",
      "icon": "turret",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "turretCooldown",
          "op": "multiply",
          "value": 0.75
        }
      ]
    },
    {
      "id": "wingman",
      "name": "회수 드론",
      "description": "자동 공격하는 보조 드론 +1. 회수와 기동에 집중할 수 있습니다.",
      "tag": "드론",
      "icon": "drone",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "droneCount",
          "op": "add",
          "value": 1
        }
      ]
    },
    {
      "id": "dronerack",
      "name": "드론 가속기",
      "description": "보조 드론 공격 속도 +35%. 드론 보유 시 효과적입니다.",
      "tag": "드론",
      "icon": "drone",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "droneRate",
          "op": "multiply",
          "value": 0.65
        }
      ],
      "requires": {
        "stat": "droneCount",
        "min": 1
      }
    },
    {
      "id": "wakebomb",
      "name": "잔향 기뢰",
      "description": "부스트 시 출발점에 기뢰 +1. 추격자를 역으로 터뜨립니다.",
      "tag": "기뢰",
      "icon": "mine",
      "color": "#f3c275",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "mineCount",
          "op": "add",
          "value": 1
        }
      ]
    },
    {
      "id": "blastcase",
      "name": "열압 탄피",
      "description": "탄환 명중 시 반경 45 폭발. 밀집한 적에게 효과적입니다.",
      "tag": "폭발",
      "icon": "burst",
      "color": "#f3c275",
      "maxStacks": 2,
      "stats": [
        {
          "stat": "splashRadius",
          "op": "add",
          "value": 45
        }
      ],
      "requires": {
        "weaponMode": "projectile"
      }
    },
    {
      "id": "shieldcell",
      "name": "재생 방벽",
      "description": "최대 보호막 +15. 피격을 피하면 자동 재생합니다.",
      "tag": "방어",
      "icon": "shield",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "maxShield",
          "op": "add",
          "value": 15
        }
      ]
    },
    {
      "id": "nanorepair",
      "name": "잔해 재생기",
      "description": "적 처치마다 선체 1.5 회복. 전투를 이어갈수록 버팁니다.",
      "tag": "회복",
      "icon": "repair",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "killHeal",
          "op": "add",
          "value": 1.5
        }
      ]
    },
    {
      "id": "plating",
      "name": "적층 장갑",
      "description": "받는 공격 피해 -2. 매 공격의 최소 피해는 1입니다.",
      "tag": "장갑",
      "icon": "armor",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "armor",
          "op": "add",
          "value": 2
        }
      ]
    },
    {
      "id": "hull",
      "name": "확장 선체",
      "description": "최대 선체 +25, 선체 25 회복.",
      "tag": "생존",
      "icon": "repair",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "maxHp",
          "op": "add",
          "value": 25
        }
      ],
      "heal": 0
    },
    {
      "id": "crit",
      "name": "틈새 조준",
      "description": "치명타 확률 +12%p. 치명타는 기본 피해의 1.8배입니다.",
      "tag": "치명",
      "icon": "target",
      "color": "#f3c275",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "critChance",
          "op": "add",
          "value": 0.12
        }
      ]
    },
    {
      "id": "signal",
      "name": "우회 신호기",
      "description": "중계기 수리 속도 +30%, 고철 4개 즉시 획득.",
      "tag": "점령",
      "icon": "relay",
      "color": "#8ef0cf",
      "maxStacks": 2,
      "stats": [
        {
          "stat": "relaySpeed",
          "op": "add",
          "value": 0.3
        }
      ],
      "scrap": 4
    },
    {
      "id": "killshield",
      "name": "반응 차폐",
      "description": "적 처치마다 보호막 +3.",
      "tag": "방어",
      "icon": "shield",
      "color": "#8ef0cf",
      "maxStacks": 3,
      "stats": [
        {
          "stat": "killShield",
          "op": "add",
          "value": 3
        }
      ]
    }
  ],
  "fallbackUpgrade": {
    "id": "emergency",
    "name": "현장 응급 수리",
    "description": "선체 30 회복, 고철 4개 획득.",
    "maxStacks": 999,
    "heal": 30,
    "scrap": 4,
    "icon": "repair",
    "tag": "보급",
    "color": "#8ef0cf",
    "stats": []
  },
  "relays": [
    {
      "id": "forge",
      "name": "화력 중계기",
      "description": "공장 지대. 좁은 잔해 사이에서 엄폐하며 수리하세요.",
      "x": 540,
      "y": 520,
      "radius": 145,
      "captureRadius": 145,
      "contestRadius": 175,
      "captureTime": 11,
      "heal": 20,
      "scrap": 4,
      "color": "#f3c275",
      "shape": "hex"
    },
    {
      "id": "dock",
      "name": "방벽 중계기",
      "description": "항만 지대. 넓은 공간에서 적을 유인한 뒤 돌아오세요.",
      "x": 1850,
      "y": 560,
      "radius": 145,
      "captureRadius": 145,
      "contestRadius": 175,
      "captureTime": 11,
      "heal": 20,
      "scrap": 4,
      "color": "#8ef0cf",
      "shape": "hex"
    },
    {
      "id": "coil",
      "name": "방전 중계기",
      "description": "폐전력 지대. 이동을 유지하며 주변을 정리하세요.",
      "x": 1210,
      "y": 1420,
      "radius": 145,
      "captureRadius": 145,
      "contestRadius": 175,
      "captureTime": 11,
      "heal": 20,
      "scrap": 4,
      "color": "#c6a3f0",
      "shape": "hex"
    }
  ],
  "waves": [
    {
      "start": 0,
      "count": 2,
      "interval": 5.5,
      "pool": [
        "raider",
        "raider",
        "gunner"
      ]
    },
    {
      "start": 35,
      "count": 3,
      "interval": 5.2,
      "pool": [
        "raider",
        "gunner",
        "rammer"
      ]
    },
    {
      "start": 80,
      "count": 4,
      "interval": 5.5,
      "pool": [
        "raider",
        "gunner",
        "rammer",
        "mortar"
      ]
    },
    {
      "start": 150,
      "count": 4,
      "interval": 5.1,
      "pool": [
        "gunner",
        "rammer",
        "mortar",
        "elite"
      ]
    },
    {
      "start": 230,
      "count": 5,
      "interval": 4.7,
      "pool": [
        "raider",
        "rammer",
        "mortar",
        "elite"
      ]
    }
  ],
  "pickups": {
    "xp": {
      "name": "회수 에너지",
      "op": "xp",
      "color": "#8ef0cf",
      "shape": "diamond",
      "radius": 5
    },
    "scrap": {
      "name": "고철 장갑",
      "op": "scrap",
      "color": "#f3c275",
      "shape": "hex",
      "radius": 7
    },
    "repair": {
      "name": "수리 팩",
      "op": "heal",
      "color": "#a2eaaa",
      "shape": "cross",
      "radius": 8
    }
  },
  "obstacles": {
    "wreck": {
      "name": "폐선 잔해",
      "shape": "wreck",
      "color": "#3c515b"
    },
    "rock": {
      "name": "노출 암반",
      "shape": "rock",
      "color": "#43555d"
    },
    "container": {
      "name": "폐화물",
      "shape": "container",
      "color": "#3d5960"
    }
  },
  "world": {
    "playerStart": {
      "x": 1200,
      "y": 880
    },
    "bossSpawn": {
      "x": 1200,
      "y": 300
    },
    "extraction": {
      "x": 1200,
      "y": 180,
      "radius": 105
    },
    "startEnemies": [
      {
        "type": "raider",
        "x": 1510,
        "y": 900
      },
      {
        "type": "raider",
        "x": 900,
        "y": 760
      },
      {
        "type": "gunner",
        "x": 1370,
        "y": 1190
      }
    ],
    "obstacles": [
      {
        "x": 840,
        "y": 570,
        "radius": 62,
        "type": "wreck",
        "angle": 0.4
      },
      {
        "x": 650,
        "y": 960,
        "radius": 55,
        "type": "container",
        "angle": -0.3
      },
      {
        "x": 1520,
        "y": 640,
        "radius": 68,
        "type": "wreck",
        "angle": -0.4
      },
      {
        "x": 1740,
        "y": 1020,
        "radius": 52,
        "type": "rock",
        "angle": 1.5
      },
      {
        "x": 950,
        "y": 1200,
        "radius": 48,
        "type": "rock",
        "angle": 0.2
      },
      {
        "x": 1480,
        "y": 1250,
        "radius": 57,
        "type": "container",
        "angle": 0.2
      },
      {
        "x": 360,
        "y": 1250,
        "radius": 70,
        "type": "wreck",
        "angle": -0.4
      },
      {
        "x": 2100,
        "y": 1300,
        "radius": 65,
        "type": "wreck",
        "angle": 0.8
      },
      {
        "x": 900,
        "y": 300,
        "radius": 45,
        "type": "container",
        "angle": 0.2
      },
      {
        "x": 1510,
        "y": 320,
        "radius": 44,
        "type": "rock",
        "angle": 0.9
      }
    ]
  },
  "effects": {
    "hit": {
      "life": 0.22,
      "radius": 24,
      "color": "#f3c275"
    },
    "float": {
      "life": 0.65,
      "radius": 0,
      "color": "#e7f1ed"
    },
    "ring": {
      "life": 0.48,
      "radius": 80,
      "color": "#8ef0cf"
    },
    "explosion": {
      "life": 0.55,
      "radius": 90,
      "color": "#ff866c"
    },
    "line": {
      "life": 0.14,
      "radius": 0,
      "color": "#8ef0cf"
    },
    "muzzle": {
      "life": 0.08,
      "radius": 13,
      "color": "#f3c275"
    },
    "trail": {
      "life": 0.22,
      "radius": 25,
      "color": "#8ef0cf"
    }
  },
  "messages": {
    "start": "자동 사격 시작. 움직이면서 가장 가까운 중계기로 향하세요.",
    "started": "항로에 진입했습니다.",
    "noRun": "진행 중인 항해가 없습니다.",
    "notPlaying": "지금은 전투가 정지되어 있습니다.",
    "unknownAbility": "알 수 없는 장치입니다.",
    "cooldown": "장치를 재충전하고 있습니다.",
    "scrapShort": "고철이 부족합니다.",
    "abilityUsed": "장치가 작동했습니다.",
    "burst": "고철 폭풍 · 잔해 {scrap}개를 연료로 사용",
    "turret": "지원 포탑 가동. 엄폐와 점령에 활용하세요.",
    "repair": "+{value}",
    "levelReward": "레벨 {level} · 새 설계를 선택하세요.",
    "relayReward": "중계기 복구 · 무료 설계 획득",
    "relayCaptured": "{name} 수리 완료 · 선체 회복 + 새 설계",
    "bossSpawned": "추격 요새가 접근합니다. 지도 상단의 거대 신호를 격파하세요.",
    "bossDown": "추격 요새 격파! 북쪽 탈출 항로로 이동하세요.",
    "won": "귀환 성공. 오늘의 잔해가 내일의 함대가 됩니다.",
    "lost": "기체 신호 소실. 다른 설계로 다시 도전하세요.",
    "unknownRig": "알 수 없는 기체입니다.",
    "notUpgrade": "지금은 설계를 선택할 수 없습니다.",
    "unknownUpgrade": "사용할 수 없는 설계입니다.",
    "upgradeChosen": "{name} 장착 완료",
    "paused": "전술 정지",
    "resumed": "항해 재개",
    "invalidSave": "이 버전의 올바른 항해 저장 파일이 아닙니다.",
    "loaded": "항해를 복원했습니다."
  },
  "ui": {
    "palette": {
      "background": "#071219",
      "floor": "#0d222c",
      "grid": "#24434b",
      "gridMajor": "#335d64",
      "accent": "#a5efcf",
      "secondary": "#8fb9e5",
      "gold": "#f1c37b",
      "danger": "#f27b68",
      "ink": "#ecf1e8",
      "muted": "#adc3c9"
    },
    "renderer": {
      "cameraFollow": 7,
      "gridSize": 90,
      "majorEvery": 5,
      "dustCount": 85,
      "zoom": 1,
      "minZoom": 0.65,
      "maxDpr": 2,
      "markerInset": 45,
      "salvageVisualCap": 10,
      "trailCount": 18,
      "shakeScale": 5,
      "strategicPadding": 120,
      "tactics": {
        "networkWidth": 2,
        "networkAlpha": 0.5,
        "orderWidth": 1.7,
        "selectedRing": 9,
        "healthWidth": 43,
        "buildPreviewAlpha": 0.08
      },
      "minLabelPixels": 11,
      "showCoordinates": false
    },
    "settings": {
      "storageKey": "scrapwake.campaign.v3",
      "settingsKey": "scrapwake.preferences.v2",
      "seedPrefix": "SW",
      "seedMax": 999999,
      "maxSeedLength": 32,
      "autoSaveSeconds": 8,
      "maxFrameDelta": 0.05,
      "toastMs": 2800,
      "damageFlashSeconds": 0.18,
      "minimapWidth": 156,
      "minimapHeight": 112,
      "touchDeadzone": 8,
      "touchRadius": 55,
      "touchBaseRadius": 70,
      "notificationSeconds": 4,
      "eventLimit": 3,
      "upgradeTagLimit": 3,
      "pixelRatioCap": 2,
      "secondsPerMinute": 60,
      "millisecondsPerSecond": 1000,
      "audioMinGain": 0.001,
      "hudInterval": 0.12,
      "cooldownDigits": 1,
      "miniRockRadius": 1.5,
      "miniBossRadius": 3,
      "miniEnemyRadius": 1.2,
      "miniRelayRadius": 3,
      "miniPlayerRadius": 2.5,
      "miniViewportAlpha": 0.4,
      "lowHullRatio": 0.25,
      "firstHintSeconds": 10,
      "secondHintSeconds": 22,
      "tutorialSeconds": 35,
      "legacyStorageKey": "scrapwake.run.v2",
      "saveEnvelopeVersion": 3,
      "commandPickRadius": 40,
      "nodePickRadius": 95,
      "miniAllyRadius": 2.2,
      "miniStructureRadius": 1.8,
      "supplyDigits": 0,
      "visibleUnitHotkeys": 2,
      "incomeDigits": 1,
      "mobileBreakpoint": 760,
      "mobileLandscapeHeight": 550,
      "mobilePixelRatioCap": 1.5,
      "mobileHudInterval": 0.2,
      "mobileDustCount": 28,
      "mobileTrailCount": 10,
      "mobileStrategicPadding": 38,
      "mobileMarkerInset": 23,
      "mobileTouchPickRadius": 22,
      "touchTapSlop": 12,
      "menuFrameInterval": 0.05,
      "titleFrameInterval": 0.08,
      "mobileShakeScale": 2.2,
      "mobileMinZoom": 0.45,
      "mobileTutorialSeconds": 12,
      "defaultTextSize": "standard",
      "minLabelPixels": 11,
      "landscapeOrientation": "landscape",
      "defaultLandscapeFullscreen": true,
      "mobileLandscapeStrategicPadding": 150
    },
    "audio": {
      "enabled": true,
      "volume": 0.05,
      "shot": {
        "frequency": 180,
        "end": 80,
        "duration": 0.05,
        "type": "triangle",
        "interval": 0.16
      },
      "kill": {
        "frequency": 620,
        "end": 300,
        "duration": 0.08,
        "type": "sine"
      },
      "hurt": {
        "frequency": 100,
        "end": 40,
        "duration": 0.17,
        "type": "sawtooth"
      },
      "upgrade": {
        "frequency": 450,
        "end": 1000,
        "duration": 0.25,
        "type": "sine"
      },
      "ability": {
        "frequency": 120,
        "end": 580,
        "duration": 0.19,
        "type": "triangle"
      }
    },
    "text": {
      "brand": "고철 해적",
      "english": "고철 해적",
      "version": "PERSISTENT CAMPAIGN / SQUAD TACTICS",
      "menuEyebrow": "THE WASTELAND DOESN’T WAIT",
      "menuTitle": "쏘고. 빼앗고.\n살아서 탈출하라.",
      "menuBody": "고철의 바다를 달리는 약탈 비행정. 세 중계기를 장악하고, 추격 요새를 무너뜨려 탈출하라. 적의 잔해는 나를 지키는 장갑이자, 판을 뒤집는 폭탄이다.",
      "rigSelect": "출격할 비행정",
      "start": "항로 돌파",
      "continue": "계속 달리기",
      "resumeSaved": "진행 중인 항로 이어가기",
      "newRun": "다시 출격",
      "newRoute": "새 항로",
      "seed": "항로 코드",
      "seedHint": "같은 코드로 같은 전장에 도전",
      "pilot": "PILOT STATUS",
      "hull": "기체 내구",
      "shield": "실드",
      "scrap": "고철 장갑",
      "level": "계급",
      "xp": "성장",
      "kills": "격파",
      "timer": "항해 시간",
      "pressure": "전장 위협",
      "objective": "작전 목표",
      "objectiveShort": "전선 운영",
      "relayMarker": "중계기",
      "extractionMarker": "탈출 지점",
      "meters": "m",
      "contested": "교전 중",
      "captured": "확보 완료",
      "capture": "확보 중",
      "next": "추천 목표",
      "boss": "추격 요새",
      "bossApproach": "추격 요새 접근 중",
      "bossDefeated": "길이 열렸다. 탈출 지점으로!",
      "bossObjective": "추격 요새 격파",
      "extractObjective": "탈출 지점으로 이동",
      "relaysObjective": "세 중계기를 원하는 순서로 확보",
      "relayHint": "보급선으로 연결된 거점만 생산·건설·증원 효과를 냅니다.",
      "combatHint": "Tab 전술 지도 · 우클릭 명령 · 1 전체 선택 · 2/3 동료 선택",
      "scrapHint": "보급소를 연결해 자원을 벌고, 전력을 끊어 적 요새를 약화시키세요.",
      "bossHint": "정면 화력전이 어렵다면 적 전력 거점을 끊고 부대를 재배치하세요.",
      "extractHint": "탈출 원 안에서 버티면 항로 돌파 완료!",
      "map": "전술 지도",
      "build": "영구 장비 구성",
      "emptyBuild": "정비고에서 원하는 모듈을 구입하고 장착하세요.",
      "upgrades": "장착 모듈",
      "weapon": "주 무장",
      "range": "사거리",
      "damage": "공격",
      "cooldown": "재사용",
      "ready": "준비 완료",
      "seconds": "초",
      "pause": "전술 정지",
      "pauseEyebrow": "TAKE A BREATH. MAKE A PLAN.",
      "pauseTitle": "다음 돌파구를 찾으세요.",
      "pauseBody": "전장은 멈췄습니다. 장착한 개조와 목표를 확인한 뒤 다시 달릴 수 있습니다.",
      "autoFire": "자동 사격",
      "autoOn": "자동 사격 켜짐",
      "autoOff": "직접 조준 모드",
      "sound": "전투 사운드",
      "soundOn": "사운드 켜짐",
      "soundOff": "사운드 꺼짐",
      "help": "조작 가이드",
      "db": "콘텐츠 DB",
      "export": "캠페인 저장 내보내기",
      "import": "저장 불러오기",
      "close": "닫기",
      "cancel": "취소",
      "choose": "장착하기",
      "evolveEyebrow": "SALVAGE. ADAPT. OVERPOWER.",
      "evolveTitle": "멈춘 건 잠깐. 강해지는 건 지금.",
      "evolveBody": "지금의 전투 방식을 바꿀 개조 하나를 선택하세요. 선택하는 동안 전장은 멈춥니다.",
      "upgradeCount": "중첩",
      "chooseKey": "숫자 키로 선택",
      "buildHint": "무기·실드·고철·기동력을 연결해 당신만의 돌파 방식을 만드세요.",
      "wonEyebrow": "LEAVE NOTHING BUT A WAKE",
      "wonTitle": "추격을 따돌렸다.",
      "wonBody": "고철의 바다를 뚫고 항로를 확보했습니다. 다른 비행정과 개조 조합으로 새로운 돌파에 도전하세요.",
      "lostEyebrow": "THE NEXT RUN IS YOURS",
      "lostTitle": "선체는 부서져도, 설계는 남는다.",
      "lostBody": "다음에는 거점 순서를 바꾸거나, 고철을 장갑으로 남겨보세요. 대시 중에는 적의 공격을 피할 수 있습니다.",
      "resultTime": "돌파 시간",
      "resultKills": "격파 수",
      "resultLevel": "최종 레벨",
      "resultRelays": "확보 거점",
      "seedLabel": "항로",
      "returnMenu": "비행정 다시 선택",
      "saved": "현재 항로를 저장했습니다.",
      "loaded": "저장한 항로를 복원했습니다.",
      "invalidSave": "이 버전의 올바른 저장 파일이 아닙니다.",
      "noSave": "이어갈 항로가 없습니다.",
      "autoSaved": "자동 저장",
      "loadFailed": "저장 파일을 읽을 수 없습니다.",
      "firstHint": "P로 전술 정지 → 동료 선택 → 지도 우클릭으로 명령. 동료도 거점을 점령합니다.",
      "mobileHint": "P 버튼으로 멈추고, 동료 카드를 고른 뒤 지도에서 목적지를 누르세요.",
      "manualHint": "마우스를 누르면 그 방향으로 직접 조준합니다.",
      "dash": "추진 돌파",
      "burst": "자력 폭발",
      "turret": "포탑 전개",
      "controlsMove": "이동",
      "controlsAim": "직접 조준",
      "controlsDash": "대시 / 회피",
      "controlsBurst": "고철로 광역 반격",
      "controlsTurret": "자동 포탑 설치",
      "controlsPause": "정지하고 명령 설계",
      "controlKeysMove": "W A S D / 방향키",
      "controlKeysAim": "마우스 누르기",
      "controlKeysDash": "SPACE",
      "controlKeysBurst": "E",
      "controlKeysTurret": "Q",
      "controlKeysPause": "P / ESC",
      "helpEyebrow": "PLAN THE FRONT. COMMAND THE FIGHT.",
      "helpTitle": "손보다 먼저, 전선을 움직이세요.",
      "helpFooter": "전술 정지 중에도 동료 선택과 명령, 건설 계획을 입력할 수 있습니다. 적은 고정된 퍼즐처럼 기다리지 않고 보급소를 탈환합니다.",
      "dbEyebrow": "TUNE YOUR OWN WASTELAND",
      "dbTitle": "전장의 설계 데이터",
      "dbBody": "게임 수치·계급·장비·항로·작전·문구는 game-db.js의 데이터로 관리됩니다. 아래에서 편집하고 검사한 뒤 DB 파일이나 단일 HTML로 내려받을 수 있습니다.",
      "dbHelp": "저장소를 바꾸려면 내려받은 game-db.js로 교체하세요. 계급은 campaign.ranks, 전투 규칙은 operations, 장비와 성장은 campaign에 있습니다.",
      "dbValidate": "DB 검증",
      "dbOkay": "데이터 구조와 참조가 유효합니다.",
      "dbInvalid": "DB 구조를 확인하세요.",
      "dbReset": "원본 복원",
      "dbDownload": "DB 파일 받기",
      "htmlDownload": "단일 HTML 받기",
      "dbNote": "내려받은 game-db.js를 index.html과 같은 폴더에 두면 적용됩니다. 단일 HTML은 파일 하나만으로 실행됩니다.",
      "fileName": "고철_해적.html",
      "saveName": "폭주_항로_캠페인.json",
      "dbName": "game-db.js",
      "menuConfirmTitle": "현재 항로를 떠날까요?",
      "menuConfirmBody": "진행은 자동 저장됩니다. 나중에 이어갈 수 있습니다.",
      "statusPaused": "정지 중",
      "statusPlaying": "항로 돌파 중",
      "statusUpgrade": "개조 선택 중",
      "statusLost": "선체 파괴",
      "statusWon": "탈출 성공",
      "enemyCount": "적",
      "sector": "고철 해역",
      "tutorialDismiss": "알겠습니다",
      "threatApproach": "시간이 흐를수록 적 증원이 강해집니다.",
      "notifications": "전황",
      "mutedNotice": "버튼으로 사운드를 켤 수 있습니다.",
      "noMoreUpgrades": "개조 완료",
      "salvaged": "인양",
      "revision": "SEA RAID 5.0",
      "attackEffect": "범위 반격",
      "armor": "피해 감소",
      "resume": "명령 실행",
      "planningTitle": "전술 정지 · 판단할 시간",
      "planningBody": "동료를 선택하고 지도 우클릭. 명령을 내린 뒤 P로 전투를 재개하세요.",
      "supply": "야전 보급",
      "network": "연결",
      "income": "생산",
      "squad": "동료 분대",
      "selectAll": "전체 선택",
      "selected": "선택됨",
      "noAllies": "생존한 동료가 없습니다. 연결된 거점에서 증원할 수 있습니다.",
      "orderContext": "상황 명령",
      "orderMove": "이동",
      "orderAttack": "집중 공격",
      "orderHold": "위치 방어",
      "orderFollow": "기체 호위",
      "orderCapture": "거점 점령",
      "orderBuild": "시설 건설",
      "orderQueued": "명령 대기열에 추가했습니다.",
      "orderSent": "명령을 전달했습니다.",
      "orderHint": "우클릭 상황 명령 · Shift로 명령 대기열 추가 · P 정지/재개",
      "selectFirst": "돌격대 선택",
      "selectSecond": "지원대 선택",
      "tacticalMap": "전술 지도",
      "reinforce": "증원",
      "buildAt": "연결된 아군 거점 근처를 선택하세요.",
      "reinforceAt": "증원할 아군 연결 거점을 먼저 선택하세요.",
      "nodeActions": "거점 운영",
      "connected": "보급 연결",
      "disconnected": "보급 단절",
      "playerOwner": "아군",
      "enemyOwner": "적군",
      "neutralOwner": "중립",
      "supplyRole": "보급소",
      "powerRole": "전력탑",
      "intelRole": "관제소",
      "factoryRole": "생산소",
      "hq": "지휘 본부",
      "cargo": "수송대",
      "fieldSupport": "보급 · 전력 · 정보",
      "enemyPush": "적 진격 예상",
      "intelRequired": "관제소를 연결하면 적의 다음 공격 목표를 확인할 수 있습니다.",
      "retreat": "장비 보존 귀환",
      "retreatHint": "본부 또는 연결 거점 근처에서 귀환할 수 있습니다. 기존 장비·연구는 남습니다.",
      "returnHQ": "작전 본부",
      "missionContinue": "진행 중인 작전 복귀",
      "campaignSaved": "캠페인과 작전 진행을 저장했습니다.",
      "campaignLoaded": "영구 성장과 작전 진행을 복원했습니다.",
      "legacyMigrated": "기존 기체 계급과 획득 개조를 영구 정비고로 옮겼습니다.",
      "missionInvalid": "저장된 작전과 캠페인의 진행이 맞지 않습니다.",
      "controlsSquad": "분대 선택",
      "controlsOrders": "이동·공격·점령 명령",
      "controlsMap": "전체 전술 지도",
      "controlKeysSquad": "1 전체 · 2/3 동료",
      "controlKeysOrders": "지도 우클릭 / 정지 중 터치",
      "controlKeysMap": "TAB",
      "tutorialSecondsNote": "전투 후 다음 항로와 정비고로 이어집니다. 패배해도 기존 연구와 장비는 초기화되지 않습니다.",
      "networkConnected": "보급 연결",
      "networkIsolated": "보급 단절",
      "convoy": "호송 수송대",
      "salvageCrate": "회수품",
      "mainTitle": "메인 타이틀",
      "titleKicker": "약탈품이 남는 해상전",
      "titleTagline": "부수고, 빼앗고, 살아서 돌아와라.",
      "titleBody": "난파선을 방패로 쓰고, 적에게 던지고, 수리 자금으로 바꾸세요. 보물선 금고를 털고 살아 돌아오면 전리품으로 배를 강화합니다.",
      "titleStart": "첫 약탈 출항",
      "titleContinue": "항해 계속",
      "titleHeadquarters": "항구 · 해역 선택",
      "titleGarage": "선박 정비",
      "titleGuide": "플레이 가이드",
      "titleSettings": "설정",
      "titleFooter": "해상 약탈 액션 · 영구 선박 성장",
      "titleSaveNote": "같은 브라우저에 자동 저장됩니다. 저장 내보내기로 진행을 보관할 수 있습니다.",
      "titleCareer": "지휘관 계급",
      "titleSectors": "확보 전선",
      "titleModules": "보유 장비",
      "titleSorties": "출격 기록",
      "titleNoProgress": "당신의 첫 전선이 기다립니다.",
      "titleActiveMission": "진행 중인 작전이 있습니다. 이어서 지휘할 수 있습니다.",
      "titleCampaignReady": "정비고와 전선 지도에서 다음 작전을 준비하세요.",
      "settingsTitle": "항해 설정",
      "settingsEyebrow": "SET YOUR COURSE",
      "settingsBody": "글자 크기와 화면 표시, 소리 및 모바일 가로 모드를 설정합니다.",
      "reducedEffects": "화면 효과 절약",
      "reducedEffectsHint": "빛 번짐과 입자를 줄여 작은 화면의 가독성과 성능을 높입니다.",
      "settingEnabled": "켜짐",
      "settingDisabled": "꺼짐",
      "settingAutoHint": "이동과 분대 지휘에 집중할 수 있도록 가까운 적을 자동으로 공격합니다.",
      "settingSoundHint": "사격·피격·명령의 소리 피드백을 켜거나 끕니다.",
      "settingsBack": "돌아가기",
      "saveManagement": "캠페인 저장 내보내기",
      "mobileObjectives": "작전 정보",
      "mobileOrders": "분대 명령",
      "mobileQueue": "예약",
      "mobileQueueOn": "명령 예약 켜짐 · 다음 명령을 대기열에 추가합니다.",
      "mobileQueueOff": "명령 예약 꺼짐 · 다음 명령으로 교체합니다.",
      "mobilePlanHint": "동료 카드 선택 → 지도 터치로 명령 → 재개",
      "mobileLiveHint": "왼쪽 스틱 이동 · 오른쪽 능력 · 정지 후 지도 터치로 지휘",
      "mobileMapHint": "지도는 좌우로 밀어 다른 전선을 볼 수 있습니다.",
      "mobileClosePanel": "패널 닫기",
      "mobileOrientationHint": "화면 방향이 바뀌어 전술 정지했습니다.",
      "mobileOperationsHint": "시설 선택 후 연결된 아군 거점 근처를 터치하세요.",
      "mobileNoKeyboard": "터치로도 모든 전술 명령을 사용할 수 있습니다.",
      "titleArtLabel": "분대를 이끄는 고철 비행정과 항로 지도",
      "mobileSquad": "분대 선택",
      "newGame": "새 게임",
      "newGameTitle": "캠페인을 처음부터 시작할까요?",
      "newGameEyebrow": "NEW CAMPAIGN",
      "newGameBody": "진행 중인 작전, 영구 계급, 기체 강화, 보유 장비, 연구와 부대 훈련을 초기화하고 새 캠페인을 시작합니다. 필요하면 먼저 저장 파일을 내보내세요.",
      "newGameBackup": "먼저 현재 진행 저장하기",
      "newGameConfirm": "초기화하고 새로 시작",
      "newGameCancel": "현재 캠페인 유지",
      "newGameDone": "새 캠페인을 시작했습니다.",
      "fullscreen": "전체화면 / 최대화",
      "fullscreenEnter": "가로 전체화면",
      "fullscreenExit": "전체화면 종료",
      "fullscreenUnsupported": "이 브라우저는 전체화면 API를 지원하지 않습니다. 기기를 가로로 돌리거나 홈 화면에 추가해 넓게 이용하세요.",
      "fullscreenFailed": "전체화면으로 전환하지 못했습니다. 브라우저에서 허용하는지 확인하세요.",
      "fullscreenRotateHint": "화면을 가로로 돌리면 가로 배치가 적용됩니다.",
      "fullscreenBody": "지원하는 브라우저에서는 주소창 없이 화면을 넓게 사용합니다. 모바일에서는 가로 방향 잠금도 함께 시도합니다.",
      "landscapePreference": "전체화면에서 가로 방향 우선",
      "landscapePreferenceHint": "기기가 가로 방향 잠금을 지원할 때 적용됩니다. 지원하지 않으면 직접 화면을 돌려주세요.",
      "textSize": "글자 크기",
      "textSizeHint": "전투 정보·버튼·설명과 지도 글자의 크기를 함께 조정합니다.",
      "settingsGuide": "조작 방법 보기",
      "loadoutLocked": "작전 중에는 장비와 부대 변경이 잠깁니다. 귀환 또는 작전 종료 후 바꿀 수 있습니다.",
      "hudReadability": "전투 정보"
    },
    "abilityKeys": {
      "dash": "SPACE",
      "burst": "E",
      "turret": "Q"
    },
    "help": [
      {
        "icon": "flag",
        "title": "출격 전에 원하는 빌드를 설계",
        "body": "임무 보상으로 원하는 장비를 직접 구입하고 강화하세요. 모듈 슬롯과 전력 한도 안에서 기체, 동료 편성, 교리를 조합합니다. 장비는 다음 항로에도 남습니다.",
        "key": "정비고"
      },
      {
        "icon": "pause",
        "title": "정지하고 분대를 지휘",
        "body": "P로 전장을 멈추세요. 동료 카드를 선택하고 지도에서 우클릭하면 이동·공격·점령을 명령합니다. Shift를 누르면 명령을 순서대로 예약합니다.",
        "key": "P · 1/2/3 · 우클릭"
      },
      {
        "icon": "relay",
        "title": "거점보다 보급선을 운영",
        "body": "보급소는 야전 자원을 생산하고, 전력탑은 요새와 시설을 지원하며, 관제소는 적의 다음 공세를 보여줍니다. 단절된 거점을 다시 연결하거나 적 연결망을 끊어보세요.",
        "key": "TAB"
      },
      {
        "icon": "turret",
        "title": "임무에 맞는 전선을 구성",
        "body": "연결된 거점에 포탑·수리 시설을 건설하거나 동료를 증원하세요. 돌파전·호위·방어·회수 작전을 마치면 보상과 다음 전선이 열립니다.",
        "key": "거점 운영"
      }
    ],
    "icons": {
      "logo": "\u003cpath d='m3 15 9-12 9 12-9-4-9 4Zm9-4v10M5 20h3m8 0h3'/>",
      "move": "\u003cpath d='M12 2v20M2 12h20M8 6l4-4 4 4M8 18l4 4 4-4M6 8l-4 4 4 4m12-8 4 4-4 4'/>",
      "dash": "\u003cpath d='m13 3 8 9-8 9M4 5l6 7-6 7M2 12h18'/>",
      "magnet": "\u003cpath d='M5 3v9a7 7 0 0 0 14 0V3h-5v9a2 2 0 0 1-4 0V3H5Zm0 4h5m4 0h5'/>",
      "turret": "\u003cpath d='M4 20h16M7 20l2-7h6l2 7M8 13V7h8v6M12 7V2m-7 8H2m20 0h-3'/>",
      "shield": "\u003cpath d='m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z'/>\u003cpath d='m8 12 3 3 5-6'/>",
      "scrap": "\u003cpath d='m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 0v20M3 7l9 5 9-5'/>",
      "crosshair": "\u003ccircle cx='12' cy='12' r='7'/>\u003cpath d='M12 2v5m0 10v5M2 12h5m10 0h5'/>",
      "weapon": "\u003cpath d='m3 16 8-8 3 3 7-7v6l-7 7-3-3-5 5-3-3ZM9 9l6 6'/>",
      "bolt": "\u003cpath d='m14 2-9 12h6l-1 8 9-12h-6l1-8Z'/>",
      "drone": "\u003cpath d='m12 7 5 5-5 5-5-5 5-5ZM2 2l5 5m10 10 5 5M2 22l5-5M17 7l5-5'/>\u003ccircle cx='3' cy='3' r='2'/>\u003ccircle cx='21' cy='3' r='2'/>\u003ccircle cx='3' cy='21' r='2'/>\u003ccircle cx='21' cy='21' r='2'/>",
      "mine": "\u003ccircle cx='12' cy='12' r='6'/>\u003cpath d='M12 2v4m0 12v4M2 12h4m12 0h4M5 5l3 3m8 8 3 3M5 19l3-3M16 8l3-3'/>",
      "repair": "\u003cpath d='M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z'/>",
      "chain": "\u003cpath d='m9 15 6-6M7 17l-2 2a4 4 0 0 1-6-6l6-6a4 4 0 0 1 6 0m2 2 2-2a4 4 0 0 1 6 6l-6 6a4 4 0 0 1-6 0' transform='translate(2 -1)'/>",
      "orb": "\u003ccircle cx='12' cy='12' r='4'/>\u003cellipse cx='12' cy='12' rx='11' ry='6' transform='rotate(-35 12 12)'/>",
      "pause": "\u003cpath d='M7 4h3v16H7V4Zm7 0h3v16h-3V4Z'/>",
      "play": "\u003cpath d='m7 3 14 9-14 9V3Z'/>",
      "help": "\u003ccircle cx='12' cy='12' r='9'/>\u003cpath d='M9 9a3 3 0 1 1 4 3c-1 .5-1 1-1 2m0 3h.01'/>",
      "db": "\u003cellipse cx='12' cy='5' rx='8' ry='3'/>\u003cpath d='M4 5v7c0 4 16 4 16 0V5M4 12v7c0 4 16 4 16 0v-7'/>",
      "download": "\u003cpath d='M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5'/>",
      "upload": "\u003cpath d='M12 16V4m-5 5 5-5 5 5M4 16v5h16v-5'/>",
      "close": "\u003cpath d='m6 6 12 12M6 18 18 6'/>",
      "right": "\u003cpath d='M3 12h18m-7-7 7 7-7 7'/>",
      "sound": "\u003cpath d='m11 4-6 5H2v6h3l6 5V4Zm4 4c4 2 4 6 0 8m3-11c6 4 6 10 0 14'/>",
      "mute": "\u003cpath d='m11 4-6 5H2v6h3l6 5V4Zm4 5 7 7m0-7-7 7'/>",
      "flag": "\u003cpath d='M5 22V3m0 0h14l-3 5 3 5H5'/>",
      "relay": "\u003cpath d='M12 5v17M7 22h10M8 5a4 4 0 0 1 8 0M4 6a8 8 0 0 1 16 0M1 8a11 11 0 0 1 22 0'/>",
      "clock": "\u003ccircle cx='12' cy='12' r='9'/>\u003cpath d='M12 6v7l4 2'/>",
      "skull": "\u003cpath d='M4 11a8 8 0 0 1 16 0v5l-4 1v4H8v-4l-4-1v-5Z'/>\u003ccircle cx='8' cy='12' r='1'/>\u003ccircle cx='16' cy='12' r='1'/>\u003cpath d='m10 17 2-2 2 2'/>",
      "wave": "\u003cpath d='M2 8c3-4 5 4 8 0s5 4 8 0 4 0 4 0M2 16c3-4 5 4 8 0s5 4 8 0'/>",
      "star": "\u003cpath d='m12 2 3 6 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1 3-6Z'/>",
      "speed": "\u003cpath d='m13 3 8 9-8 9M4 5l6 7-6 7M2 12h18'/>",
      "armor": "\u003cpath d='m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z'/>\u003cpath d='m8 12 3 3 5-6'/>",
      "burst": "\u003cpath d='M5 3v10a7 7 0 0 0 14 0V3h-5v10a2 2 0 0 1-4 0V3H5Zm0 5h5m4 0h5'/>",
      "damage": "\u003cpath d='m3 16 8-8 3 3 7-7v6l-7 7-3-3-5 5-3-3ZM9 9l6 6'/>",
      "magnetism": "\u003cpath d='M5 3v10a7 7 0 0 0 14 0V3h-5v10a2 2 0 0 1-4 0V3H5Zm0 5h5m4 0h5'/>",
      "energy": "\u003cpath d='m14 2-9 12h6l-1 8 9-12h-6l1-8Z'/>",
      "health": "\u003cpath d='M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z'/>",
      "map": "\u003cpath d='m2 5 6-3 8 3 6-3v17l-6 3-8-3-6 3V5Zm6-3v17m8-14v17'/>",
      "factory": "\u003cpath d='M3 21V9l6 4V8l6 4V3h5v18H3Zm4-4h1m4 0h1m4 0h1'/>",
      "research": "\u003cpath d='M8 2h8m-6 0v7l-7 11h18L14 9V2M7 15h10'/>",
      "settings": "\u003ccircle cx='12' cy='12' r='3'/>\u003cpath d='m10 2-1 3-3 1-3-1-2 4 2 2v3l-2 2 2 4 3-1 3 1 1 3h4l1-3 3-1 3 1 2-4-2-2v-3l2-2-2-4-3 1-3-1-1-3h-4Z'/>",
      "maximize": "\u003cpath d='M3 9V3h6m6 0h6v6M3 15v6h6m6 0h6v-6M3 3l6 6m6 6 6 6M21 3l-6 6m-6 6-6 6'/>",
      "minimize": "\u003cpath d='M9 3v6H3m12-6v6h6M3 15h6v6m6 0v-6h6'/>",
      "restart": "\u003cpath d='M3 9V3m0 6h6M3 9a9 9 0 1 1 0 7'/>",
      "anchor": "\u003cpath d='M12 3v17M5 10H2a10 10 0 0 0 20 0h-3M8 7h8'/>\u003ccircle cx='12' cy='3' r='2'/>"
    },
    "bindings": {
      "up": [
        "KeyW",
        "ArrowUp"
      ],
      "down": [
        "KeyS",
        "ArrowDown"
      ],
      "left": [
        "KeyA",
        "ArrowLeft"
      ],
      "right": [
        "KeyD",
        "ArrowRight"
      ],
      "dash": [
        "Space"
      ],
      "burst": [
        "KeyE"
      ],
      "turret": [
        "KeyQ"
      ],
      "pause": [
        "KeyP",
        "Escape"
      ],
      "selectAll": [
        "Digit1"
      ],
      "selectFirst": [
        "Digit2"
      ],
      "selectSecond": [
        "Digit3"
      ],
      "map": [
        "Tab"
      ],
      "queue": [
        "ShiftLeft",
        "ShiftRight"
      ]
    },
    "phaseLabels": {
      "playing": "statusPlaying",
      "paused": "statusPaused",
      "upgrade": "statusUpgrade",
      "won": "statusWon",
      "lost": "statusLost"
    },
    "controlRows": [
      {
        "label": "controlsMove",
        "key": "controlKeysMove"
      },
      {
        "label": "controlsPause",
        "key": "controlKeysPause"
      },
      {
        "label": "controlsSquad",
        "key": "controlKeysSquad"
      },
      {
        "label": "controlsOrders",
        "key": "controlKeysOrders"
      },
      {
        "label": "controlsMap",
        "key": "controlKeysMap"
      }
    ],
    "commands": [
      {
        "id": "context",
        "text": "orderContext",
        "icon": "crosshair"
      },
      {
        "id": "move",
        "text": "orderMove",
        "icon": "move"
      },
      {
        "id": "attack",
        "text": "orderAttack",
        "icon": "weapon"
      },
      {
        "id": "hold",
        "text": "orderHold",
        "icon": "shield"
      },
      {
        "id": "follow",
        "text": "orderFollow",
        "icon": "drone"
      },
      {
        "id": "build",
        "text": "orderBuild",
        "icon": "turret"
      }
    ],
    "orderLabels": {
      "move": "orderMove",
      "attack": "orderAttack",
      "hold": "orderHold",
      "follow": "orderFollow",
      "capture": "orderCapture"
    },
    "roleLabels": {
      "supply": "supplyRole",
      "power": "powerRole",
      "intel": "intelRole",
      "factory": "factoryRole"
    },
    "title": {
      "art": "\u003csvg viewBox='0 0 700 690' fill='none' xmlns='http://www.w3.org/2000/svg' role='img'>\u003cdefs>\u003clinearGradient id='title-hull' x1='310' y1='130' x2='440' y2='560' gradientUnits='userSpaceOnUse'>\u003cstop stop-color='#395861'/>\u003cstop offset='1' stop-color='#132e39'/>\u003c/linearGradient>\u003clinearGradient id='title-engine' x1='0' y1='0' x2='0' y2='130'>\u003cstop stop-color='#a5efcf' stop-opacity='.75'/>\u003cstop offset='1' stop-color='#a5efcf' stop-opacity='0'/>\u003c/linearGradient>\u003c/defs>\u003cg stroke='#a5efcf' stroke-opacity='.13'>\u003ccircle cx='350' cy='335' r='265'/>\u003ccircle cx='350' cy='335' r='208' stroke-dasharray='6 13'/>\u003ccircle cx='350' cy='335' r='130'/>\u003cpath d='M30 335h640M350 15v640M120 105l460 460M120 565l460-460'/>\u003c/g>\u003cg stroke='#f1c37b' stroke-opacity='.4'>\u003cpath d='m78 427 110-65 84 83 170-260 186 59' stroke-dasharray='5 7'/>\u003ccircle cx='78' cy='427' r='6'/>\u003ccircle cx='188' cy='362' r='6'/>\u003ccircle cx='272' cy='445' r='6'/>\u003ccircle cx='442' cy='185' r='6'/>\u003ccircle cx='628' cy='244' r='6'/>\u003c/g>\u003cg transform='translate(12 5) rotate(-24 350 330)'>\u003cpath d='m271 416-19 124 36 65 38-63-21-126' fill='url(#title-engine)'/>\u003cpath d='m396 416-17 124 34 65 38-63-18-126' fill='url(#title-engine)'/>\u003cg fill='#102a34' stroke='#7ca8ad' stroke-width='2'>\u003cpath d='m220 250-61 70 13 139 72-49 10-136-34-24Z'/>\u003cpath d='m482 250 61 70-13 139-72-49-10-136 34-24Z'/>\u003c/g>\u003cpath d='m350 79 71 144 27 218-51 57-47-28-48 28-50-57 27-218L350 79Z' fill='url(#title-hull)' stroke='#a5efcf' stroke-opacity='.7' stroke-width='2'/>\u003cpath d='m350 98-32 146 32 49 32-49-32-146Z' fill='#a5efcf' fill-opacity='.13' stroke='#a5efcf' stroke-opacity='.6'/>\u003cpath d='M350 294v161M279 223l39 21m103-21-39 21M264 356l68-22m104 22-68-22' stroke='#8baeb4' stroke-opacity='.55'/>\u003cpath d='m289 284-31 115 36 48 25-99-30-64Zm122 0 31 115-36 48-25-99 30-64Z' fill='#09232e' stroke='#6d939c'/>\u003cpath d='m310 359 40-24 40 24v61l-40 28-40-28v-61Z' fill='#102f39' stroke='#f1c37b' stroke-opacity='.8'/>\u003cpath d='m330 372 20-12 20 12v31l-20 13-20-13v-31Z' fill='#f1c37b' fill-opacity='.16' stroke='#f1c37b'/>\u003cpath d='M217 311v73m267-73v73' stroke='#f1c37b' stroke-width='7'/>\u003cpath d='M282 436v24m137-24v24' stroke='#a5efcf' stroke-width='12'/>\u003cpath d='m308 192 14-31m56 0 14 31M283 268h19m96 0h19' stroke='#f1c37b' stroke-width='3'/>\u003ccircle cx='350' cy='318' r='5' fill='#a5efcf'/>\u003c/g>\u003cg fill='#112f39' stroke='#8fb9e5' stroke-opacity='.5'>\u003cpath d='m120 500 23 48-23-10-23 10 23-48Z' transform='rotate(-22 120 524)'/>\u003cpath d='m542 453 20 43-20-9-20 9 20-43Z' transform='rotate(-22 542 474)'/>\u003c/g>\u003cg stroke='#a5efcf' stroke-opacity='.5'>\u003cpath d='M473 112h102l30 30M88 244h75l31-31M420 549h133l24-24'/>\u003cpath d='M470 106v12m-6-6h12M85 238v12m-6-6h12'/>\u003c/g>\u003c/svg>"
    },
    "textSizes": [
      {
        "id": "standard",
        "label": "기본",
        "scale": 1
      },
      {
        "id": "large",
        "label": "크게",
        "scale": 1.15
      },
      {
        "id": "largest",
        "label": "아주 크게",
        "scale": 1.3
      }
    ],
    "abilityLabels": {
      "dash": "돌파",
      "burst": "폭발",
      "turret": "포탑"
    }
  },
  "campaign": {
    "_docs": {
      "purpose": "영구 캠페인·창고·연구·기체·동료·작전 데이터. 실행 코드는 campaign engine에 있고 원본은 game-db.js의 campaign입니다.",
      "modules": "modules stats는 등급마다 반복 적용. power + (rank-1)*rankPower의 전력을 소비하며 4슬롯과 전력 한도를 지켜 편성합니다. 소유 장비·연구·기체 등급은 패배해도 소실되지 않습니다. requires는 무기 모드 또는 장착 빌드 스탯 조건입니다.",
      "research": "requires 연구를 모두 완료한 뒤 비용을 지불합니다. stats는 플레이어, supportStats는 부대·보급 배율, powerBonus는 장착 전력을 확장합니다.",
      "sector": "requires 전선을 점령하면 잠금 해제. requireMode=any는 어느 한 곳만 점령해도 됩니다. owned 전선은 재출격 가능하며 승리한 작전마다 income을 제공합니다. 최종 전선을 확보한 뒤에도 작전과 성장은 계속됩니다.",
      "settlement": "makeMission의 고유 id와 같은 missionId만 한 번 정산합니다. 전투 phase와 missionResult, missionLoot를 받아 영구 자원·경험·전선 상태를 갱신합니다. 실패 시에도 장비와 성장 그대로, 일부 회수 보상만 감소합니다."
    },
    "config": {
      "version": 3,
      "defaultSeed": "FRONTIER-01",
      "slots": 4,
      "powerBase": 7,
      "squadSlots": 2,
      "startResources": {
        "alloy": 160,
        "data": 30
      },
      "startModules": [
        {
          "id": "hotbarrel",
          "rank": 1
        },
        {
          "id": "shieldcell",
          "rank": 1
        }
      ],
      "startLoadout": [
        "hotbarrel",
        "shieldcell",
        null,
        null
      ],
      "startUnits": [
        "vanguard",
        "engineer"
      ],
      "startSquad": [
        "vanguard",
        "engineer"
      ],
      "defaultDoctrine": "maneuver",
      "careerStartLevel": 1,
      "careerXpBase": 36,
      "careerXpGrowth": 18,
      "careerMaxLevel": 40,
      "careerStats": [
        {
          "stat": "maxHp",
          "op": "add",
          "value": 2
        },
        {
          "stat": "damage",
          "op": "add",
          "value": 0.02
        }
      ],
      "rigStartRank": 1,
      "rigMaxRank": 6,
      "rigCost": {
        "alloy": 85,
        "data": 12
      },
      "rigCostGrowth": 1.45,
      "rigStats": [
        {
          "stat": "maxHp",
          "op": "add",
          "value": 8
        },
        {
          "stat": "damage",
          "op": "add",
          "value": 0.04
        }
      ],
      "unitStartRank": 1,
      "unitMaxRank": 5,
      "unitCost": {
        "alloy": 50,
        "data": 6
      },
      "unitCostGrowth": 1.45,
      "unitRankHp": 0.12,
      "unitRankDamage": 0.1,
      "defeatLootFraction": 0.35,
      "withdrawLootFraction": 0.55,
      "victoryXp": 28,
      "defeatXp": 12,
      "withdrawXp": 18,
      "killXp": 1,
      "defeatResources": {
        "alloy": 12,
        "data": 1
      },
      "repeatDifficulty": 0.06,
      "completedDifficulty": 0.12,
      "resourceCap": 999999,
      "legacyLevelCap": 40,
      "supportBase": {
        "supplyIncome": 1,
        "unitDamage": 1,
        "unitHp": 1,
        "constructionCost": 1
      },
      "legacyDefaultLoadout": true
    },
    "resources": {
      "alloy": {
        "name": "합금",
        "icon": "scrap",
        "color": "#f3c275"
      },
      "data": {
        "name": "설계 자료",
        "icon": "db",
        "color": "#a7b8ef"
      }
    },
    "modules": [
      {
        "id": "hotbarrel",
        "name": "빠른 장전",
        "description": "함포 재장전을 줄여 일제사격을 더 자주 합니다.",
        "icon": "weapon",
        "stats": [
          {
            "stat": "fireRate",
            "op": "add",
            "value": 0.25
          }
        ],
        "ref": "hotbarrel",
        "tag": "연사",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 42,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 36,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "fracture",
        "name": "중량 포탄",
        "description": "모든 함포 피해 +25%. 장갑 선체와 금고를 더 빨리 부숩니다.",
        "icon": "weapon",
        "stats": [
          {
            "stat": "damage",
            "op": "add",
            "value": 0.25
          }
        ],
        "ref": "fracture",
        "tag": "화력",
        "color": "#f3c275",
        "cost": {
          "alloy": 50,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 46,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "splitter",
        "name": "추가 포문",
        "description": "일제사격 포탄 +1. 넓은 선체에 화력을 집중합니다.",
        "icon": "weapon",
        "stats": [
          {
            "stat": "projectileCount",
            "op": "add",
            "value": 1
          }
        ],
        "ref": "splitter",
        "tag": "산탄",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 58,
          "data": 6
        },
        "upgradeCost": {
          "alloy": 56,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 3,
        "rankPower": 0.5,
        "maxRank": 3,
        "requires": {
          "weaponMode": "projectile"
        }
      },
      {
        "id": "piercer",
        "name": "관통탄",
        "description": "포탄 관통 +1. 뒤에 있는 배와 부위까지 피해를 줍니다.",
        "icon": "weapon",
        "stats": [
          {
            "stat": "pierce",
            "op": "add",
            "value": 1
          }
        ],
        "ref": "piercer",
        "tag": "관통",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 66,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 36,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3,
        "requires": {
          "weaponMode": "projectile"
        }
      },
      {
        "id": "arcnode",
        "name": "연쇄 전격",
        "description": "적중 시 가까운 적에게 추가 전격. 밀집한 호위선을 노리세요.",
        "icon": "bolt",
        "stats": [
          {
            "stat": "chainCount",
            "op": "add",
            "value": 1
          }
        ],
        "ref": "arcnode",
        "tag": "연쇄",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 42,
          "data": 6
        },
        "upgradeCost": {
          "alloy": 46,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 3,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "capacitor",
        "name": "전격 증폭기",
        "description": "연쇄 전격 피해를 강화합니다.",
        "icon": "bolt",
        "stats": [
          {
            "stat": "chainDamage",
            "op": "add",
            "value": 0.15
          }
        ],
        "ref": "capacitor",
        "tag": "연쇄",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 50,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 56,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3,
        "requires": {
          "any": [
            {
              "stat": "chainCount",
              "min": 1
            },
            {
              "weaponStat": "chain",
              "min": 1
            }
          ]
        },
        "research": "conductors"
      },
      {
        "id": "orbital",
        "name": "충돌 장갑",
        "description": "장갑 +1. 포탄과 충돌 피해를 줄입니다.",
        "icon": "scrap",
        "stats": [
          {
            "stat": "armor",
            "op": "add",
            "value": 1
          }
        ],
        "ref": "orbital",
        "tag": "고철",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 58,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 36,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "magnet",
        "name": "회수 자석",
        "description": "잔해 분해로 얻는 고철 +2, 자동 회수 거리 +40.",
        "icon": "scrap",
        "stats": [
          {
            "stat": "operationSalvage",
            "op": "add",
            "value": 2
          },
          {
            "stat": "pickupRadius",
            "op": "add",
            "value": 40
          }
        ],
        "ref": "magnet",
        "tag": "회수",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 66,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 46,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "overdrive",
        "name": "기동 사격",
        "description": "항해 중 함포 피해 +20%. 물살을 타며 포격하세요.",
        "icon": "speed",
        "stats": [
          {
            "stat": "movingDamage",
            "op": "add",
            "value": 0.2
          }
        ],
        "ref": "overdrive",
        "tag": "기동",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 42,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 56,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "afterburner",
        "name": "고속 추진기",
        "description": "항해 속도 +15%. 만선 상태에서도 빠르게 귀항합니다.",
        "icon": "speed",
        "stats": [
          {
            "stat": "speed",
            "op": "multiply",
            "value": 1.15
          }
        ],
        "ref": "afterburner",
        "tag": "기동",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 50,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 36,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "ramplate",
        "name": "충각",
        "description": "잔해 투척 피해 +30. 큰 잔해로 호위선과 보물선 부위를 격파합니다.",
        "icon": "armor",
        "stats": [
          {
            "stat": "dashDamage",
            "op": "add",
            "value": 30
          }
        ],
        "ref": "ramplate",
        "tag": "충각",
        "color": "#f3c275",
        "cost": {
          "alloy": 58,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 46,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "phasefuel",
        "name": "견인 모터",
        "description": "잔해 견인 범위 +70, 선회 속도 +10%.",
        "icon": "speed",
        "stats": [
          {
            "stat": "operationGrapple",
            "op": "add",
            "value": 70
          },
          {
            "stat": "operationTurn",
            "op": "add",
            "value": 0.1
          }
        ],
        "ref": "phasefuel",
        "tag": "기동",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 66,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 56,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "stormcore",
        "name": "폭발 압축기",
        "description": "잔해·압축탄 직접 피해 +24, 폭발 범위 +30. 여러 배와 부위를 함께 타격합니다.",
        "icon": "burst",
        "stats": [
          {
            "stat": "operationThrowDamage",
            "op": "add",
            "value": 24
          },
          {
            "stat": "operationThrowBlast",
            "op": "add",
            "value": 30
          }
        ],
        "ref": "stormcore",
        "tag": "폭발",
        "color": "#f3c275",
        "cost": {
          "alloy": 42,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 36,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "rapidburst",
        "name": "회수 추진기",
        "description": "잔해 투척 속도 +25%.",
        "icon": "burst",
        "stats": [
          {
            "stat": "operationThrowSpeed",
            "op": "add",
            "value": 0.25
          }
        ],
        "ref": "rapidburst",
        "tag": "폭발",
        "color": "#f3c275",
        "cost": {
          "alloy": 50,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 46,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "autoturret",
        "name": "동료 포격 연동",
        "description": "동료 함포 피해와 방패 지속 시간을 강화합니다.",
        "icon": "turret",
        "stats": [
          {
            "stat": "turretDamage",
            "op": "add",
            "value": 6
          },
          {
            "stat": "turretDuration",
            "op": "add",
            "value": 6
          }
        ],
        "ref": "autoturret",
        "tag": "지원",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 58,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 56,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "sentrynet",
        "name": "동료 장전기",
        "description": "동료 함포 재장전을 줄입니다.",
        "icon": "turret",
        "stats": [
          {
            "stat": "turretCooldown",
            "op": "multiply",
            "value": 0.65
          }
        ],
        "ref": "sentrynet",
        "tag": "지원",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 66,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 36,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "wingman",
        "name": "정비 드론",
        "description": "기함 주변에서 초당 내구 1.2 회복. 수리선과 중첩됩니다.",
        "icon": "drone",
        "stats": [
          {
            "stat": "droneCount",
            "op": "add",
            "value": 1
          }
        ],
        "ref": "wingman",
        "tag": "드론",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 42,
          "data": 6
        },
        "upgradeCost": {
          "alloy": 46,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 3,
        "rankPower": 0.5,
        "maxRank": 3,
        "research": "drone-license"
      },
      {
        "id": "dronerack",
        "name": "정비 드론 가속",
        "description": "드론 자동 수리 속도를 높입니다.",
        "icon": "drone",
        "stats": [
          {
            "stat": "droneRate",
            "op": "multiply",
            "value": 0.65
          }
        ],
        "ref": "dronerack",
        "tag": "드론",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 50,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 56,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3,
        "requires": {
          "stat": "droneCount",
          "min": 1
        },
        "research": "drone-license"
      },
      {
        "id": "wakebomb",
        "name": "항적 기뢰",
        "description": "항해 중 일정 간격으로 뒤에 기뢰를 남깁니다.",
        "icon": "mine",
        "stats": [
          {
            "stat": "mineCount",
            "op": "add",
            "value": 1
          }
        ],
        "ref": "wakebomb",
        "tag": "기뢰",
        "color": "#f3c275",
        "cost": {
          "alloy": 58,
          "data": 6
        },
        "upgradeCost": {
          "alloy": 36,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 3,
        "rankPower": 0.5,
        "maxRank": 3,
        "research": "demolition"
      },
      {
        "id": "blastcase",
        "name": "폭발 포탄",
        "description": "함포 명중 시 주변 적에게 폭발 피해를 줍니다.",
        "icon": "burst",
        "stats": [
          {
            "stat": "splashRadius",
            "op": "add",
            "value": 45
          }
        ],
        "ref": "blastcase",
        "tag": "폭발",
        "color": "#f3c275",
        "cost": {
          "alloy": 66,
          "data": 6
        },
        "upgradeCost": {
          "alloy": 46,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 3,
        "rankPower": 0.5,
        "maxRank": 3,
        "requires": {
          "weaponMode": "projectile"
        },
        "research": "demolition"
      },
      {
        "id": "shieldcell",
        "name": "보강 방벽",
        "description": "최대 내구를 높입니다. 방패 효과와 함께 오래 버팁니다.",
        "icon": "shield",
        "stats": [
          {
            "stat": "maxShield",
            "op": "add",
            "value": 15
          }
        ],
        "ref": "shieldcell",
        "tag": "방어",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 42,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 56,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "nanorepair",
        "name": "잔해 재생기",
        "description": "적 격파 시 내구 +4. 연쇄 폭발로 회복을 노리세요.",
        "icon": "repair",
        "stats": [
          {
            "stat": "killHeal",
            "op": "add",
            "value": 4
          }
        ],
        "ref": "nanorepair",
        "tag": "회복",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 50,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 36,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "plating",
        "name": "적층 장갑",
        "description": "받는 피해 -2. 포격과 충돌에 모두 적용됩니다.",
        "icon": "armor",
        "stats": [
          {
            "stat": "armor",
            "op": "add",
            "value": 2
          }
        ],
        "ref": "plating",
        "tag": "장갑",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 58,
          "data": 6
        },
        "upgradeCost": {
          "alloy": 46,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 3,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "hull",
        "name": "확장 선체",
        "description": "최대 내구 +25. 약탈품을 싣고 살아 돌아올 여유를 만듭니다.",
        "icon": "repair",
        "stats": [
          {
            "stat": "maxHp",
            "op": "add",
            "value": 25
          }
        ],
        "ref": "hull",
        "tag": "생존",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 66,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 56,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "crit",
        "name": "정밀 조준",
        "description": "치명타 확률 +12%p. 약점을 향한 일제사격을 강화합니다.",
        "icon": "target",
        "stats": [
          {
            "stat": "critChance",
            "op": "add",
            "value": 0.12
          }
        ],
        "ref": "crit",
        "tag": "치명",
        "color": "#f3c275",
        "cost": {
          "alloy": 42,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 36,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3,
        "research": "targeting"
      },
      {
        "id": "signal",
        "name": "인양 장치",
        "description": "화물 회수 범위 +60, 만선 감속을 줄입니다.",
        "icon": "relay",
        "stats": [
          {
            "stat": "pickupRadius",
            "op": "add",
            "value": 60
          },
          {
            "stat": "operationCargoDrag",
            "op": "add",
            "value": 0.02
          }
        ],
        "ref": "signal",
        "tag": "점령",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 50,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 46,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      },
      {
        "id": "killshield",
        "name": "잔해 방벽 회수",
        "description": "적 격파 시 0.45초 방패 전개. 방패선과 편성하면 연쇄 격파 중 포탄을 반사합니다.",
        "icon": "shield",
        "stats": [
          {
            "stat": "operationKillShield",
            "op": "add",
            "value": 0.45
          }
        ],
        "ref": "killshield",
        "tag": "방어",
        "color": "#8ef0cf",
        "cost": {
          "alloy": 58,
          "data": 2
        },
        "upgradeCost": {
          "alloy": 56,
          "data": 4
        },
        "upgradeGrowth": 1.6,
        "power": 2,
        "rankPower": 0.5,
        "maxRank": 3
      }
    ],
    "research": [
      {
        "id": "aux-core",
        "name": "보조 동력로",
        "description": "장착 전력 +2. 큰 모듈과 고등급 장비를 함께 운용합니다.",
        "icon": "bolt",
        "cost": {
          "alloy": 55,
          "data": 16
        },
        "requires": [],
        "powerBonus": 2
      },
      {
        "id": "field-supply",
        "name": "분산 보급망",
        "description": "잔해 분해 회수량 +20%. 수리·방패·압축탄 자금이 늘어납니다.",
        "icon": "relay",
        "cost": {
          "alloy": 50,
          "data": 14
        },
        "requires": [],
        "supportStats": [
          {
            "stat": "supplyIncome",
            "op": "multiply",
            "value": 1.2
          }
        ]
      },
      {
        "id": "crew-training",
        "name": "편대 전투 교범",
        "description": "모든 동료의 체력 +15%, 화력 +10%.",
        "icon": "flag",
        "cost": {
          "alloy": 65,
          "data": 18
        },
        "requires": [],
        "supportStats": [
          {
            "stat": "unitHp",
            "op": "multiply",
            "value": 1.15
          },
          {
            "stat": "unitDamage",
            "op": "multiply",
            "value": 1.1
          }
        ]
      },
      {
        "id": "conductors",
        "name": "도전성 폐합금",
        "description": "연쇄 공격 부품을 해금하고 분산 피해 계수를 높입니다.",
        "icon": "chain",
        "cost": {
          "alloy": 65,
          "data": 22
        },
        "requires": [
          "aux-core"
        ],
        "stats": [
          {
            "stat": "chainRange",
            "op": "add",
            "value": 25
          }
        ]
      },
      {
        "id": "drone-license",
        "name": "자율 비행 제어",
        "description": "회수 드론과 가속기를 설계합니다. 정비 드론 지원 체계를 해금합니다.",
        "icon": "drone",
        "cost": {
          "alloy": 75,
          "data": 24
        },
        "requires": [
          "field-supply"
        ]
      },
      {
        "id": "demolition",
        "name": "폭압 공학",
        "description": "잔향 기뢰와 열압 탄피를 설계합니다. 폭발 반격 피해 +10%.",
        "icon": "mine",
        "cost": {
          "alloy": 70,
          "data": 22
        },
        "requires": [
          "aux-core"
        ],
        "stats": [
          {
            "stat": "burstDamage",
            "op": "multiply",
            "value": 1.1
          }
        ]
      },
      {
        "id": "targeting",
        "name": "정밀 사격 통제",
        "description": "틈새 조준 설계를 해금하고 모든 동료의 화력 +15%.",
        "icon": "crosshair",
        "cost": {
          "alloy": 80,
          "data": 26
        },
        "requires": [
          "crew-training"
        ],
        "supportStats": [
          {
            "stat": "unitDamage",
            "op": "multiply",
            "value": 1.15
          }
        ]
      },
      {
        "id": "efficient-build",
        "name": "재사용 공병 자재",
        "description": "수리 비용 -20%, 잔해 견인 범위 +20. 고철을 아끼며 잔해를 무기화합니다.",
        "icon": "turret",
        "cost": {
          "alloy": 95,
          "data": 28
        },
        "requires": [
          "field-supply"
        ],
        "supportStats": [
          {
            "stat": "constructionCost",
            "op": "multiply",
            "value": 0.8
          }
        ],
        "stats": [
          {
            "stat": "operationGrapple",
            "op": "add",
            "value": 20
          }
        ]
      },
      {
        "id": "deep-reactor",
        "name": "심층 반응로",
        "description": "장착 전력 +2. 최대 실드 +12.",
        "icon": "shield",
        "cost": {
          "alloy": 140,
          "data": 45
        },
        "requires": [
          "aux-core",
          "conductors"
        ],
        "powerBonus": 2,
        "stats": [
          {
            "stat": "maxShield",
            "op": "add",
            "value": 12
          }
        ]
      },
      {
        "id": "battle-network",
        "name": "통합 전장 네트워크",
        "description": "동료 내구 +20%, 잔해 회수량 +15%, 동료 지원 사거리 +50.",
        "icon": "relay",
        "cost": {
          "alloy": 150,
          "data": 44
        },
        "requires": [
          "crew-training",
          "efficient-build"
        ],
        "supportStats": [
          {
            "stat": "unitHp",
            "op": "multiply",
            "value": 1.2
          },
          {
            "stat": "supplyIncome",
            "op": "multiply",
            "value": 1.15
          }
        ],
        "stats": [
          {
            "stat": "turretRange",
            "op": "add",
            "value": 50
          }
        ]
      }
    ],
    "units": [
      {
        "id": "vanguard",
        "name": "방패선",
        "description": "선수에서 적 포탄을 막습니다. 방패 전개 중 맞은 포탄을 적에게 되쏩니다.",
        "role": "tank",
        "behavior": "rifle",
        "icon": "shield",
        "shape": "shield",
        "color": "#83dcb8",
        "cost": {
          "alloy": 0,
          "data": 0
        },
        "hp": 145,
        "damage": 9,
        "speed": 178,
        "range": 235,
        "fireRate": 0.6,
        "armor": 2,
        "repairRate": 0,
        "healRate": 0,
        "captureRate": 1
      },
      {
        "id": "engineer",
        "name": "수리선",
        "description": "근처에서 선체를 수리합니다. 수리 비용 -1, 수리량 +16, 잔해 회수 범위 증가.",
        "role": "support",
        "behavior": "engineer",
        "icon": "turret",
        "shape": "hex",
        "color": "#e3be77",
        "cost": {
          "alloy": 0,
          "data": 0
        },
        "hp": 96,
        "damage": 6,
        "speed": 190,
        "range": 235,
        "fireRate": 0.75,
        "armor": 0,
        "repairRate": 8,
        "healRate": 3,
        "captureRate": 1.55
      },
      {
        "id": "sniper",
        "name": "저격선",
        "description": "조준 중인 부위를 긴 사거리에서 집중 공격합니다.",
        "role": "assault",
        "behavior": "sniper",
        "icon": "crosshair",
        "shape": "diamond",
        "color": "#ae9ded",
        "cost": {
          "alloy": 85,
          "data": 15
        },
        "hp": 84,
        "damage": 22,
        "speed": 172,
        "range": 435,
        "fireRate": 1.1,
        "armor": 0,
        "repairRate": 0,
        "healRate": 0,
        "captureRate": 0.8
      },
      {
        "id": "medic",
        "name": "구조선",
        "description": "주변 함대의 내구를 지속적으로 회복합니다. 장기전과 만선 귀환에 적합합니다.",
        "role": "support",
        "behavior": "medic",
        "icon": "repair",
        "shape": "cross",
        "color": "#8cd4ed",
        "cost": {
          "alloy": 75,
          "data": 14
        },
        "hp": 106,
        "damage": 5,
        "speed": 180,
        "range": 265,
        "fireRate": 0.9,
        "armor": 0,
        "repairRate": 2,
        "healRate": 9,
        "captureRate": 1
      }
    ],
    "doctrines": [
      {
        "id": "maneuver",
        "name": "기동형 운용",
        "description": "속도 +8%, 견인 범위 +30. 빠르게 잔해와 금고를 약탈하고 물살을 타고 귀항합니다.",
        "icon": "speed",
        "stats": [
          {
            "stat": "speed",
            "op": "multiply",
            "value": 1.08
          },
          {
            "stat": "operationGrapple",
            "op": "add",
            "value": 30
          }
        ],
        "supportStats": []
      },
      {
        "id": "siege",
        "name": "화력형 운용",
        "description": "직접 화력 +10%, 동료 화력 +15%. 포격으로 배와 부위를 차례로 격파합니다.",
        "icon": "weapon",
        "stats": [
          {
            "stat": "damage",
            "op": "add",
            "value": 0.1
          },
          {
            "stat": "shieldRegen",
            "op": "multiply",
            "value": 0.8
          }
        ],
        "supportStats": [
          {
            "stat": "unitDamage",
            "op": "multiply",
            "value": 1.15
          }
        ]
      },
      {
        "id": "logistics",
        "name": "방어형 운용",
        "description": "내구 증가, 방패 지속 강화, 잔해 분해 보상 +20%. 속도 -5%.",
        "icon": "relay",
        "stats": [
          {
            "stat": "maxShield",
            "op": "add",
            "value": 10
          },
          {
            "stat": "turretDuration",
            "op": "add",
            "value": 4
          },
          {
            "stat": "speed",
            "op": "multiply",
            "value": 0.95
          }
        ],
        "supportStats": [
          {
            "stat": "supplyIncome",
            "op": "multiply",
            "value": 1.2
          }
        ]
      }
    ],
    "sectors": [
      {
        "id": "dock",
        "name": "첫 약탈 해역",
        "kind": "assault",
        "description": "금고를 부수고 화물 3개를 모아 항구로 돌아오세요. 기관을 부수면 보물선이 도망가지 못합니다.",
        "requires": [],
        "requireMode": "any",
        "position": {
          "x": 12,
          "y": 55
        },
        "difficulty": 1.0,
        "reward": {
          "alloy": 80,
          "data": 14
        },
        "income": {
          "alloy": 10,
          "data": 1
        },
        "mission": {
          "captureGoal": 2,
          "enemyScale": 1.0,
          "supplyStart": 70,
          "training": true,
          "naval": {
            "contract": "raid",
            "enemyScale": 1.0,
            "currentScale": 1.0,
            "signalBudget": 1,
            "training": true
          }
        },
        "final": false
      },
      {
        "id": "lifeline",
        "name": "조난 선원 구조 해역",
        "kind": "convoy",
        "description": "해역의 조난 선원 3명을 구조해 항구로 데려오세요. 주변 적을 폭발물과 잔해로 처리할 수 있습니다.",
        "requires": [
          "dock"
        ],
        "requireMode": "any",
        "position": {
          "x": 31,
          "y": 25
        },
        "difficulty": 1.06,
        "reward": {
          "alloy": 95,
          "data": 18
        },
        "income": {
          "alloy": 12,
          "data": 2
        },
        "mission": {
          "convoyHp": 430,
          "enemyScale": 1.06,
          "supplyStart": 65,
          "training": false,
          "operations": {
            "enemyBudget": 18,
            "reinforceInterval": 3,
            "reinforceStart": 5,
            "enemyHpMultiplier": 1.065
          },
          "naval": {
            "contract": "rescue",
            "enemyScale": 1.06,
            "currentScale": 1.06,
            "signalBudget": 3,
            "training": false
          }
        },
        "final": false
      },
      {
        "id": "plant",
        "name": "대형 포격선 사냥터",
        "kind": "defense",
        "description": "보물선을 격침하고 항구로 귀환하세요. 포대와 화약고를 먼저 부수면 유리합니다.",
        "requires": [
          "dock"
        ],
        "requireMode": "any",
        "position": {
          "x": 32,
          "y": 77
        },
        "difficulty": 1.08,
        "reward": {
          "alloy": 100,
          "data": 20
        },
        "income": {
          "alloy": 14,
          "data": 1
        },
        "mission": {
          "defenseDuration": 100,
          "captureGoal": 2,
          "enemyScale": 1.08,
          "supplyStart": 65,
          "training": false,
          "operations": {
            "enemyBudget": 18,
            "reinforceInterval": 3,
            "reinforceStart": 5,
            "enemyHpMultiplier": 1.13
          },
          "naval": {
            "contract": "hunt",
            "enemyScale": 1.08,
            "currentScale": 1.12,
            "signalBudget": 3,
            "training": false
          }
        },
        "final": false
      },
      {
        "id": "forge",
        "name": "난파선 군도",
        "kind": "salvage",
        "description": "난파 화물 3개를 인양해 귀항하세요. 전투를 피하거나 방해하는 배만 격파해도 됩니다.",
        "requires": [
          "lifeline"
        ],
        "requireMode": "any",
        "position": {
          "x": 51,
          "y": 12
        },
        "difficulty": 1.18,
        "reward": {
          "alloy": 130,
          "data": 28
        },
        "income": {
          "alloy": 18,
          "data": 2
        },
        "mission": {
          "cratesRequired": 5,
          "enemyScale": 1.18,
          "supplyStart": 60,
          "training": false,
          "operations": {
            "enemyBudget": 24,
            "reinforceInterval": 3,
            "reinforceStart": 4,
            "enemyHpMultiplier": 1.195
          },
          "naval": {
            "contract": "salvage",
            "enemyScale": 1.18,
            "currentScale": 1.18,
            "signalBudget": 3,
            "training": false
          }
        },
        "final": false
      },
      {
        "id": "refuge",
        "name": "중장갑선 사냥터",
        "kind": "defense",
        "description": "보물선을 격침하고 항구로 귀환하세요. 포대와 화약고를 먼저 부수면 유리합니다.",
        "requires": [
          "lifeline",
          "plant"
        ],
        "requireMode": "any",
        "position": {
          "x": 53,
          "y": 47
        },
        "difficulty": 1.22,
        "reward": {
          "alloy": 135,
          "data": 30
        },
        "income": {
          "alloy": 16,
          "data": 3
        },
        "mission": {
          "defenseDuration": 115,
          "captureGoal": 3,
          "enemyScale": 1.22,
          "supplyStart": 65,
          "training": false,
          "operations": {
            "enemyBudget": 24,
            "reinforceInterval": 3,
            "reinforceStart": 4,
            "enemyHpMultiplier": 1.26
          },
          "naval": {
            "contract": "hunt",
            "enemyScale": 1.22,
            "currentScale": 1.24,
            "signalBudget": 3,
            "training": false
          }
        },
        "final": false
      },
      {
        "id": "rail",
        "name": "해적 봉쇄선",
        "kind": "convoy",
        "description": "해역의 조난 선원 3명을 구조해 항구로 데려오세요. 주변 적을 폭발물과 잔해로 처리할 수 있습니다.",
        "requires": [
          "plant"
        ],
        "requireMode": "any",
        "position": {
          "x": 52,
          "y": 87
        },
        "difficulty": 1.2,
        "reward": {
          "alloy": 130,
          "data": 26
        },
        "income": {
          "alloy": 14,
          "data": 3
        },
        "mission": {
          "convoyHp": 400,
          "enemyScale": 1.2,
          "supplyStart": 60,
          "training": false,
          "operations": {
            "enemyBudget": 24,
            "reinforceInterval": 3,
            "reinforceStart": 4,
            "enemyHpMultiplier": 1.325
          },
          "naval": {
            "contract": "rescue",
            "enemyScale": 1.2,
            "currentScale": 1.3,
            "signalBudget": 3,
            "training": false
          }
        },
        "final": false
      },
      {
        "id": "spire",
        "name": "원해 화물 인양 해역",
        "kind": "salvage",
        "description": "난파 화물 3개를 인양해 귀항하세요. 전투를 피하거나 방해하는 배만 격파해도 됩니다.",
        "requires": [
          "forge",
          "refuge"
        ],
        "requireMode": "any",
        "position": {
          "x": 74,
          "y": 25
        },
        "difficulty": 1.36,
        "reward": {
          "alloy": 165,
          "data": 40
        },
        "income": {
          "alloy": 18,
          "data": 4
        },
        "mission": {
          "cratesRequired": 6,
          "enemyScale": 1.36,
          "supplyStart": 65,
          "training": false,
          "operations": {
            "enemyBudget": 30,
            "reinforceInterval": 3,
            "reinforceStart": 4,
            "enemyHpMultiplier": 1.3900000000000001
          },
          "naval": {
            "contract": "salvage",
            "enemyScale": 1.36,
            "currentScale": 1.3599999999999999,
            "signalBudget": 3,
            "training": false
          }
        },
        "final": false
      },
      {
        "id": "harbor",
        "name": "해적 본거지",
        "kind": "assault",
        "description": "금고를 부수고 화물 3개를 모아 항구로 돌아오세요. 기관을 부수면 보물선이 도망가지 못합니다.",
        "requires": [
          "refuge",
          "rail"
        ],
        "requireMode": "any",
        "position": {
          "x": 75,
          "y": 75
        },
        "difficulty": 1.4,
        "reward": {
          "alloy": 180,
          "data": 40
        },
        "income": {
          "alloy": 22,
          "data": 3
        },
        "mission": {
          "captureGoal": 2,
          "enemyScale": 1.4,
          "supplyStart": 70,
          "training": false,
          "operations": {
            "enemyBudget": 30,
            "reinforceInterval": 3,
            "reinforceStart": 4,
            "enemyHpMultiplier": 1.455
          },
          "naval": {
            "contract": "raid",
            "enemyScale": 1.4,
            "currentScale": 1.42,
            "signalBudget": 3,
            "training": false
          }
        },
        "final": false
      },
      {
        "id": "heart",
        "name": "마지막 보물선",
        "kind": "assault",
        "description": "금고를 부수고 화물 3개를 모아 항구로 돌아오세요. 기관을 부수면 보물선이 도망가지 못합니다.",
        "requires": [
          "spire",
          "harbor"
        ],
        "requireMode": "any",
        "position": {
          "x": 93,
          "y": 50
        },
        "difficulty": 1.65,
        "reward": {
          "alloy": 260,
          "data": 65
        },
        "income": {
          "alloy": 25,
          "data": 5
        },
        "mission": {
          "captureGoal": 3,
          "enemyScale": 1.65,
          "supplyStart": 75,
          "training": false,
          "operations": {
            "enemyBudget": 30,
            "reinforceInterval": 3,
            "reinforceStart": 4,
            "enemyHpMultiplier": 1.52
          },
          "naval": {
            "contract": "raid",
            "enemyScale": 1.65,
            "currentScale": 1.48,
            "signalBudget": 3,
            "training": false
          }
        },
        "final": true
      }
    ],
    "text": {
      "created": "새 원정단이 편성되었습니다. 장비와 성장은 항로를 넘어 유지됩니다.",
      "saved": "원정단을 복원했습니다.",
      "invalidSave": "올바른 캠페인 저장 데이터가 아닙니다.",
      "unknownModule": "알 수 없는 장비입니다.",
      "owned": "이미 보유한 설계입니다.",
      "notOwned": "먼저 장비를 제작하세요.",
      "insufficient": "자원이 부족합니다.",
      "researchLocked": "선행 연구가 필요합니다.",
      "researchDone": "이미 완료한 연구입니다.",
      "unknownResearch": "알 수 없는 연구입니다.",
      "purchased": "{name} 제작 완료. 창고에서 언제든 다시 장착할 수 있습니다.",
      "upgraded": "{name} 강화 완료.",
      "maxRank": "최고 등급입니다.",
      "invalidSlot": "올바른 장착 슬롯이 아닙니다.",
      "duplicateModule": "동일한 장비는 한 슬롯에만 장착할 수 있습니다.",
      "powerShort": "전력이 부족합니다. 다른 장비를 해제하거나 동력로를 연구하세요.",
      "incompatible": "현재 기체나 장착 빌드와 호환되지 않는 장비입니다.",
      "equipped": "{name} 장착 완료.",
      "unequipped": "장비를 창고로 옮겼습니다. 소유 등급은 유지됩니다.",
      "researched": "{name} 연구 완료.",
      "rigChanged": "{name} 편성 완료. 호환되지 않는 장비는 창고로 옮겼습니다.",
      "unknownRig": "알 수 없는 기체입니다.",
      "unitLocked": "해당 동료의 운용권을 먼저 확보하세요.",
      "unknownUnit": "알 수 없는 동료입니다.",
      "unitPurchased": "{name} 운용권 확보. 동료는 전투에서 쓰러져도 유지됩니다.",
      "squadChanged": "동료 편성을 변경했습니다.",
      "doctrineChanged": "{name} 적용 완료.",
      "unknownDoctrine": "알 수 없는 교리입니다.",
      "unknownSector": "알 수 없는 전선입니다.",
      "sectorLocked": "연결된 전선을 먼저 확보하세요.",
      "missionActive": "진행 중인 작전을 먼저 마무리하세요.",
      "missionReady": "{name} 작전 준비 완료.",
      "invalidMission": "현재 원정단의 작전 기록과 일치하지 않습니다.",
      "settled": "작전 정산 완료. 장비와 영구 성장은 유지됩니다.",
      "duplicateSettlement": "이미 정산했거나 유효하지 않은 작전입니다.",
      "legacyImported": "이전 항로에서 얻은 기체 레벨과 개조를 영구 원정단으로 이전했습니다.",
      "legacyInvalid": "이전 항로 데이터를 이전할 수 없습니다.",
      "activeChange": "작전 중에는 정비 편성을 변경할 수 없습니다.",
      "alloy": "합금",
      "data": "설계 자료",
      "victory": "작전 성공",
      "defeat": "전선 이탈",
      "withdraw": "전술 철수",
      "missionCancelled": "이전 전투의 작전 예약을 해제했습니다. 영구 계급·장비·연구는 그대로 유지됩니다."
    },
    "ui": {
      "text": {
        "eyebrow": "COMMAND THE FRONTIER",
        "title": "항구",
        "subtitle": "전리품으로 배를 강화하고 다음 약탈을 준비하세요.",
        "career": "지휘관 계급",
        "level": "계급",
        "experience": "경험",
        "sorties": "출격",
        "permanent": "영구 성장",
        "saved": "캠페인 저장",
        "save": "저장 내보내기",
        "load": "저장 불러오기",
        "back": "전선으로",
        "next": "다음 전선 설계",
        "launch": "작전 개시",
        "locked": "미개방",
        "open": "진입 가능",
        "owned": "통제 중",
        "sector": "작전 구역",
        "difficulty": "위협",
        "objective": "작전 목표",
        "reward": "예상 보상",
        "income": "통제 수입",
        "incomeHint": "성공한 출격마다 통제 구역의 수입이 누적됩니다.",
        "unlockHint": "선행 구역을 통제하면 새로운 전선이 열립니다.",
        "repeat": "재출격",
        "repeatHint": "이미 확보한 구역도 다시 출격할 수 있습니다. 장비는 유지되고, 전선의 위협은 커집니다.",
        "campaignComplete": "주요 전선 안정화 · 심화 작전 개방",
        "missionBrief": "작전 브리핑",
        "missionTypes": {
          "assault": "보물선 약탈",
          "convoy": "조난 선원 구조",
          "defense": "현상금 사냥",
          "salvage": "난파 화물 인양"
        },
        "missionHints": {
          "assault": "금고를 부수고 화물 3개를 모아 항구로 돌아오세요. 기관을 부수면 보물선이 도망가지 못합니다.",
          "convoy": "해역의 조난 선원 3명을 구조해 항구로 데려오세요. 주변 적을 폭발물과 잔해로 처리할 수 있습니다.",
          "defense": "보물선을 격침하고 항구로 귀환하세요. 포대와 화약고를 먼저 부수면 유리합니다.",
          "salvage": "난파 화물 3개를 인양해 귀항하세요. 전투를 피하거나 방해하는 배만 격파해도 됩니다."
        },
        "garageTitle": "배와 장비 설정",
        "garageBody": "배를 고르고 장비칸에 장착하세요. 실제 함포 피해·재장전·항해·잔해 투척 성능을 비교할 수 있습니다.",
        "activeRig": "출항할 배",
        "rigRank": "선박 강화",
        "rigUpgrade": "선박 강화하기",
        "maxRank": "최대 등급",
        "power": "장비 전력",
        "powerHint": "장착한 장비의 전력 합계가 기체 한도를 넘으면 장착할 수 없습니다. 장비를 해제하거나 전력 연구를 진행하세요.",
        "slots": "장착할 칸",
        "slot": "슬롯",
        "emptySlot": "빈 장비칸",
        "selectSlot": "이 슬롯에 장착",
        "slotHint": "테두리가 빛나는 칸에 장착됩니다. 기존 장비를 교체해도 창고에 그대로 남습니다.",
        "unequip": "해제",
        "moduleCatalog": "장비 선택",
        "allModules": "전체 장비",
        "ownedModules": "보유 장비",
        "buy": "장비 구입",
        "upgrade": "강화하기",
        "equip": "장착",
        "equipped": "장착 중",
        "rank": "강화",
        "notOwned": "미보유",
        "modulePower": "필요 전력",
        "needs": "필요",
        "cost": "비용",
        "ownedModuleHint": "구입·강화한 개조는 패배해도 사라지지 않습니다.",
        "statPreview": "실제 전투 성능",
        "statSource": "실제 함포·항해·잔해 투척 성능입니다. 기체와 계급, 장비·연구를 반영합니다.",
        "noModules": "표시할 개조가 없습니다.",
        "researchTitle": "다음 전술을 먼저 연구하세요.",
        "researchBody": "어떤 기술을 먼저 열지 직접 선택합니다. 연구는 영구 적용되며, 선행 기술과 자료 비용이 필요합니다.",
        "researched": "연구 완료",
        "research": "연구",
        "prerequisites": "선행 기술",
        "researchReady": "연구 가능",
        "researchLocked": "선행 연구 필요",
        "researchBonus": "영구 효과",
        "researchUnlocks": "새 설계 개방",
        "noPrerequisites": "기초 기술",
        "researchPersistent": "연구 성과는 모든 이후 출격에 적용됩니다.",
        "squadTitle": "함께 출항할 동료",
        "squadBody": "함께 출항할 동료를 고르세요. 배마다 전투 중 하는 일이 다릅니다.",
        "squadSlots": "바꿀 출격 자리",
        "squadSlot": "출격 자리",
        "emptySquad": "동료를 배치하세요",
        "assign": "편성",
        "assigned": "이 자리에 배치됨",
        "selectSquad": "편성할 분대 선택",
        "doctrine": "함대 운용 방식",
        "selected": "선택 중",
        "select": "선택",
        "unitHp": "최대 내구",
        "unitDamage": "포격 피해",
        "unitRange": "사거리",
        "unitSpeed": "속도",
        "role": "역할",
        "unitLocked": "연구로 개방",
        "doctrineHint": "선택한 운용 방식은 다음 출격부터 기체와 동료 전체에 적용됩니다. 비용 없이 바꿀 수 있습니다.",
        "commandHint": "방패선은 포탄 반사, 수리선은 회복, 저격선은 선택 부위를 집중 공격합니다.",
        "debriefEyebrow": "AFTER ACTION REPORT",
        "victoryTitle": "이 전선은 우리의 것이다.",
        "defeatTitle": "패배는 장비를 빼앗지 못한다.",
        "withdrawTitle": "전력을 보존하고, 다음 수를 준비한다.",
        "victoryBody": "자원과 경험을 정산했습니다. 확보한 구역의 수입과 새 항로를 확인하고, 다음 출격에 맞춰 설계를 바꾸세요.",
        "defeatBody": "기존 기체 강화·장비·연구는 그대로 남습니다. 이번 작전의 회수분으로 정비하고 같은 구역에 다시 도전할 수 있습니다.",
        "withdrawBody": "작전을 중단하고 회수 가능한 전리품을 정산했습니다. 영구 성장과 장비는 유지됩니다.",
        "gained": "회수한 자원",
        "xpGained": "획득 경험",
        "newLevel": "진급 현황",
        "newSectors": "새 전선 개방",
        "retained": "장비 · 기체 강화 · 연구 유지",
        "debriefTime": "항해 시간",
        "debriefKills": "격파",
        "debriefNodes": "확보 거점",
        "debriefSalvage": "인양",
        "debriefContinue": "정비 후 다음 작전",
        "noLoot": "회수 자원 없음",
        "fixedBuild": "원하는 장비를 구입하고, 강화하고, 다음 전선에 맞춰 재편성하세요.",
        "genericError": "지금은 이 작업을 진행할 수 없습니다.",
        "resources": "보유 자원",
        "defaultCampaign": "장기 캠페인",
        "seconds": "초",
        "meters": "m",
        "damage": "피해",
        "capacity": "한도",
        "unitOwned": "사용 가능",
        "buyUnit": "부대 개방",
        "openGarage": "설계 정비",
        "openResearch": "연구소",
        "openSquad": "부대 편성",
        "incompatible": "현재 기체의 무장과 호환되지 않습니다.",
        "resumeMission": "진행 중인 작전 복귀",
        "mainTitle": "메인 타이틀",
        "mapGesture": "지도를 좌우로 밀어 다른 전선을 확인하세요.",
        "availableModules": "사용 가능한 장비",
        "rigSwitchHint": "배를 바꾸면 주무기와 선체 성능이 바뀝니다. 호환되지 않는 장비는 창고로 돌아갑니다.",
        "weaponLabel": "주무기",
        "selectRig": "이 기체 사용",
        "selectedRig": "사용 중인 기체",
        "selectedSocket": "선택한 장착칸",
        "socket": "{slot}번 장비칸",
        "socketBody": "아래 장비를 이 칸에 장착합니다.",
        "remainingPower": "남은 전력",
        "preview": "장착 전 성능 보기",
        "previewTitle": "선택한 장비를 장착하면",
        "previewEmpty": "장비의 성능 보기 버튼을 누르면 현재 기체와 비교할 수 있습니다.",
        "current": "현재",
        "afterEquip": "장착 후",
        "noStatChange": "추가 기능은 아래 장비 효과를 확인하세요.",
        "equipAt": "{slot}번 칸에 장착",
        "replaceAt": "{slot}번 칸 교체",
        "currentlyEquipped": "현재 장착 중",
        "buyFirst": "구입 후 장착할 수 있습니다.",
        "buyCost": "구입 비용",
        "upgradeCost": "다음 강화 비용",
        "nextRank": "다음 강화",
        "effects": "이 장비의 효과",
        "costShort": "재료 부족",
        "needHave": "{name}: 보유 {have} / 필요 {need}",
        "researchFirst": "먼저 연구 필요",
        "openRequiredResearch": "필요한 연구 보기",
        "compatibility": "사용 조건",
        "projectileOnly": "탄환을 발사하는 주무기 전용",
        "beamOnly": "전격 주무기 전용",
        "requiresStat": "{name} {value} 이상 필요",
        "conditionOr": " 또는 ",
        "conditionAnd": " · ",
        "powerShort": "장착 후 전력 {usage}/{capacity} — 다른 장비를 해제하거나 전력 한도를 늘리세요.",
        "upgradePowerShort": "강화 후 전력 한도를 넘습니다. 먼저 다른 장비를 해제하세요.",
        "activeLock": "진행 중인 작전이 있어 정비와 편성을 바꿀 수 없습니다. 작전 복귀 후 귀환하거나 임무를 마무리하세요.",
        "goResume": "진행 중인 작전 복귀",
        "selectFirst": "선택",
        "garageSteps": [
          "기체 선택",
          "장착할 칸 선택",
          "장비 구입·장착"
        ],
        "squadSteps": [
          "출격 자리 선택",
          "동료 배치",
          "운용 방식 선택"
        ],
        "position": "{slot}번 출격 자리",
        "assignAt": "{slot}번 자리에 배치",
        "assignedElsewhere": "다른 자리에도 배치되어 있습니다.",
        "unitUpgrade": "대원 훈련하기",
        "unitRank": "훈련 등급",
        "unitUnlock": "동료 영구 해금",
        "unitUnlockCost": "해금 비용",
        "unitUpgradeCost": "다음 훈련 비용",
        "unitRepair": "초당 수리",
        "unitRole": "함대 역할",
        "clearSquad": "이 자리 비우기",
        "applyDoctrine": "이 운용 방식 사용",
        "selectedDoctrine": "현재 적용 중",
        "doctrineRoles": {
          "tank": "전방 방어",
          "assault": "원거리 화력",
          "support": "수리·지원"
        },
        "effectsPerRank": "강화 {rank}단계 기준",
        "squadSummary": "현재 출격 편성",
        "unitHelp": "동료는 기함을 따라 항해합니다. 침몰해도 영구 해금과 훈련은 사라지지 않습니다.",
        "nextCareerRank": "다음 계급",
        "careerMaxRank": "최고 계급",
        "roundUnit": "차례",
        "adjacentSupport": "인접 거점 지원",
        "sameNodeSupport": "같은 거점 전투"
      },
      "tabs": [
        {
          "id": "map",
          "label": "전선 지도",
          "icon": "relay"
        },
        {
          "id": "garage",
          "label": "설계 정비",
          "icon": "weapon"
        },
        {
          "id": "research",
          "label": "연구소",
          "icon": "bolt"
        },
        {
          "id": "squad",
          "label": "부대 편성",
          "icon": "drone"
        }
      ],
      "statRows": [
        {
          "key": "maxHp",
          "label": "함대 내구",
          "format": "number"
        },
        {
          "key": "attack",
          "label": "함포 일제사격 피해",
          "format": "number"
        },
        {
          "key": "cannonCooldown",
          "label": "재장전 시간",
          "format": "number"
        },
        {
          "key": "speed",
          "label": "항해 속도",
          "format": "number"
        },
        {
          "key": "range",
          "label": "함포 사거리",
          "format": "number"
        },
        {
          "key": "throwDamage",
          "label": "잔해 투척 피해",
          "format": "number"
        },
        {
          "key": "armor",
          "label": "장갑",
          "format": "number"
        },
        {
          "key": "repair",
          "label": "초당 자동 수리",
          "format": "number"
        }
      ],
      "settings": {
        "mapWidth": 1000,
        "mapHeight": 560,
        "mapPadding": 7,
        "mapNodeRadius": 22,
        "percentScale": 100,
        "statDigits": 1,
        "secondsPerMinute": 60,
        "tierScale": 5,
        "visibleRequirementLimit": 3,
        "resourceIconFallback": "scrap",
        "compareEpsilon": 0.0001
      },
      "missionIcons": {
        "assault": "crosshair",
        "convoy": "move",
        "defense": "shield",
        "salvage": "scrap"
      },
      "statMeta": {
        "maxHp": {
          "label": "최대 내구도",
          "unit": "",
          "format": "flat"
        },
        "maxShield": {
          "label": "내구 전환 보호막",
          "unit": "",
          "format": "flat"
        },
        "damage": {
          "label": "주무기 위력",
          "unit": "%",
          "format": "percent"
        },
        "fireRate": {
          "label": "함포 장전 속도",
          "unit": "%",
          "format": "percent"
        },
        "speed": {
          "label": "이동 속도",
          "unit": "",
          "format": "flat"
        },
        "armor": {
          "label": "받는 피해 감소",
          "unit": "",
          "format": "flat"
        },
        "burstCooldown": {
          "label": "폭격 대기 계수",
          "unit": "",
          "format": "flat"
        },
        "burstDamage": {
          "label": "자력 폭발 피해",
          "unit": "",
          "format": "flat"
        },
        "burstRadius": {
          "label": "자력 폭발 범위",
          "unit": "",
          "format": "flat"
        },
        "chainCount": {
          "label": "연쇄 전격 대상",
          "unit": "명",
          "format": "flat"
        },
        "chainDamage": {
          "label": "연쇄 전격 위력",
          "unit": "%",
          "format": "percent"
        },
        "chainRange": {
          "label": "연쇄 전격 거리",
          "unit": "",
          "format": "flat"
        },
        "critChance": {
          "label": "정밀 화력 계수",
          "unit": "%",
          "format": "percent"
        },
        "dashCooldown": {
          "label": "추진 보급 비용 계수",
          "unit": "",
          "format": "flat"
        },
        "dashDamage": {
          "label": "잔해 투척 위력",
          "unit": "",
          "format": "flat"
        },
        "droneCount": {
          "label": "지원 드론",
          "unit": "기",
          "format": "flat"
        },
        "droneRate": {
          "label": "드론 수리 주기",
          "unit": "",
          "format": "flat"
        },
        "killHeal": {
          "label": "처치 시 내구 회복",
          "unit": "",
          "format": "flat"
        },
        "killShield": {
          "label": "격파 시 내구 회복",
          "unit": "",
          "format": "flat"
        },
        "mineCount": {
          "label": "항적 기뢰",
          "unit": "",
          "format": "flat"
        },
        "movingDamage": {
          "label": "진입 공격 보너스",
          "unit": "%",
          "format": "percent"
        },
        "orbitDamage": {
          "label": "고철 장갑 접촉 피해",
          "unit": "",
          "format": "flat"
        },
        "pickupRadius": {
          "label": "화물·고철 회수 거리",
          "unit": "",
          "format": "flat"
        },
        "pierce": {
          "label": "장갑 관통 계수",
          "unit": "",
          "format": "flat"
        },
        "projectileCount": {
          "label": "추가 발사체",
          "unit": "발",
          "format": "flat"
        },
        "relaySpeed": {
          "label": "거점 확보 속도",
          "unit": "%",
          "format": "percent"
        },
        "splashRadius": {
          "label": "분산 피해 계수",
          "unit": "",
          "format": "flat"
        },
        "spreadBonus": {
          "label": "발사각 확장",
          "unit": "",
          "format": "flat"
        },
        "turretCooldown": {
          "label": "동료 재장전 시간",
          "unit": "",
          "format": "flat"
        },
        "turretDamage": {
          "label": "동료 포격 계수",
          "unit": "",
          "format": "flat"
        },
        "turretDuration": {
          "label": "방패 지속 계수",
          "unit": "",
          "format": "flat"
        },
        "chain": {
          "label": "연쇄 전격",
          "unit": "회",
          "format": "flat"
        },
        "operationIncome": {
          "label": "차례당 추가 보급",
          "unit": "",
          "format": "flat"
        },
        "operationMovement": {
          "label": "추가 이동 구간",
          "unit": "",
          "format": "flat"
        },
        "operationSalvage": {
          "label": "잔해 분해 추가 고철",
          "unit": "",
          "format": "flat"
        },
        "operationGrapple": {
          "label": "잔해 견인 거리",
          "unit": "",
          "format": "flat"
        },
        "operationTurn": {
          "label": "선회 속도",
          "unit": "%",
          "format": "percent"
        },
        "operationThrowSpeed": {
          "label": "투척 속도",
          "unit": "%",
          "format": "percent"
        },
        "operationCargoDrag": {
          "label": "화물 감속 감소",
          "unit": "%",
          "format": "percent"
        },
        "operationThrowDamage": {
          "label": "투척·압축탄 피해",
          "unit": "",
          "format": "flat"
        },
        "operationThrowBlast": {
          "label": "투척 폭발 범위",
          "unit": "",
          "format": "flat"
        },
        "operationKillShield": {
          "label": "격파 시 방패 전개",
          "unit": "초",
          "format": "flat"
        }
      },
      "mutatingActions": [
        "rig",
        "rig-upgrade",
        "module-buy",
        "module-upgrade",
        "module-equip",
        "unequip",
        "research",
        "squad-assign",
        "squad-clear",
        "unit-buy",
        "unit-upgrade",
        "doctrine"
      ]
    },
    "ranks": [
      {
        "id": "rank_1",
        "name": "이등병",
        "minLevel": 1
      },
      {
        "id": "rank_2",
        "name": "일등병",
        "minLevel": 2
      },
      {
        "id": "rank_3",
        "name": "상등병",
        "minLevel": 3
      },
      {
        "id": "rank_4",
        "name": "병장",
        "minLevel": 4
      },
      {
        "id": "rank_5",
        "name": "하사",
        "minLevel": 5
      },
      {
        "id": "rank_6",
        "name": "중사",
        "minLevel": 7
      },
      {
        "id": "rank_7",
        "name": "상사",
        "minLevel": 9
      },
      {
        "id": "rank_8",
        "name": "원사",
        "minLevel": 11
      },
      {
        "id": "rank_9",
        "name": "소위",
        "minLevel": 13
      },
      {
        "id": "rank_10",
        "name": "중위",
        "minLevel": 15
      },
      {
        "id": "rank_11",
        "name": "대위",
        "minLevel": 17
      },
      {
        "id": "rank_12",
        "name": "소령",
        "minLevel": 19
      },
      {
        "id": "rank_13",
        "name": "중령",
        "minLevel": 22
      },
      {
        "id": "rank_14",
        "name": "대령",
        "minLevel": 25
      },
      {
        "id": "rank_15",
        "name": "준장",
        "minLevel": 28
      },
      {
        "id": "rank_16",
        "name": "소장",
        "minLevel": 32
      },
      {
        "id": "rank_17",
        "name": "중장",
        "minLevel": 36
      },
      {
        "id": "rank_18",
        "name": "대장",
        "minLevel": 40
      }
    ]
  },
  "naval": {
    "config": {
      "version": 5,
      "worldWidth": 1900,
      "worldHeight": 1200,
      "maxDt": 0.033,
      "step": 0.0166666667,
      "startScrap": 10,
      "scrapCap": 99,
      "playerRadius": 23,
      "playerX": 280,
      "playerY": 780,
      "playerAngle": -0.3,
      "speedScale": 0.78,
      "acceleration": 3.8,
      "turnSpeed": 3.4,
      "waterDrag": 2.2,
      "cargoSlow": 0.06,
      "towSlow": 0.08,
      "shieldHpScale": 0.8,
      "invulnerability": 0.25,
      "minDamage": 1,
      "cannonDamageScale": 1.5,
      "cannonInterval": 1.05,
      "cannonCount": 3,
      "countPower": 0.65,
      "cannonSpread": 0.09,
      "shellSpeed": 600,
      "shellRadius": 5,
      "shellLife": 1.8,
      "muzzleOffset": 27,
      "rangeScale": 1.05,
      "recoil": 13,
      "pierceArmor": 2,
      "chainRangeScale": 1,
      "splashScale": 0.8,
      "allyDamageScale": 0.55,
      "allyIntervalScale": 2,
      "allyFollowSpeed": 3,
      "allyRepairScale": 0.07,
      "allyRepairRange": 165,
      "allyOffset": 90,
      "allyFireRange": 510,
      "allyShieldBonus": 0.5,
      "shieldCost": 3,
      "shieldCooldown": 8,
      "shieldDuration": 1.6,
      "shieldRadius": 100,
      "shieldDamageFactor": 0.1,
      "reflectDamage": 1.7,
      "repairCost": 6,
      "engineerRepairDiscount": 1,
      "repairAmount": 34,
      "engineerRepairBonus": 16,
      "repairCooldown": 9,
      "grappleRange": 255,
      "grappleSpring": 10,
      "towOffset": 61,
      "throwSpeed": 740,
      "throwDamage": 135,
      "throwRadius": 18,
      "throwLife": 1.9,
      "throwCost": 4,
      "wreckValue": 8,
      "wreckHp": 45,
      "wreckLife": 100,
      "wreckRadius": 24,
      "wreckDrift": 0.8,
      "wreckBurst": 0.13,
      "pickupRadius": 12,
      "pickupLife": 180,
      "pickupMagnet": 130,
      "pickupSpeed": 460,
      "lootScrap": 5,
      "lootXp": 8,
      "cargoXp": 12,
      "cargoData": 4,
      "cargoScatter": 50,
      "extractionTime": 1.4,
      "escapeMargin": 80,
      "comboTime": 5,
      "comboMax": 5,
      "comboStep": 0.2,
      "hitStop": 0.045,
      "damageShake": 8,
      "killShake": 6,
      "blastShake": 14,
      "bossShake": 22,
      "shakeDecay": 20,
      "effectLife": 0.75,
      "floatLife": 1.15,
      "particleCount": 22,
      "particleSpeed": 140,
      "particleLife": 0.65,
      "maxEffects": 160,
      "maxParticles": 240,
      "maxProjectiles": 150,
      "wakeInterval": 0.085,
      "wakeLife": 1.5,
      "hitFlash": 0.15,
      "rippleSpeed": 80,
      "heavyKnockback": 100,
      "islandCollisionDamage": 6,
      "islandSpeedThreshold": 130,
      "projectileCurrentScale": 0.2,
      "barrelRadius": 185,
      "barrelDamage": 165,
      "magazineRadius": 265,
      "magazineDamage": 210,
      "coreArmor": 0.42,
      "brokenArmor": 0.85,
      "engineSlow": 0,
      "bossSpeed": 3.8,
      "bossScale": 0.22,
      "bossGunRange": 750,
      "bossGunInterval": 3.4,
      "bossTell": 1.05,
      "bossDamage": 14,
      "bossShellCount": 5,
      "bossShellSpread": 0.12,
      "bossReward": 36,
      "bossXp": 26,
      "escapeX": 1830,
      "signalInterval": 32,
      "signalBudget": 3,
      "signalHp": 70,
      "pursuitDelay": 4,
      "pursuitCount": 2,
      "dangerRange": 360,
      "repairWarning": 0.38,
      "hudUpdateMs": 100,
      "saveInterval": 6,
      "renderDpr": 1.7,
      "minimumCameraWidth": 820,
      "minimumCameraHeight": 520,
      "cameraFollow": 6,
      "cameraLookAhead": 90,
      "uiToastMs": 2800,
      "popMs": 1400,
      "counterFlashMs": 500,
      "starOne": 0,
      "starTwo": 2,
      "starThree": 4,
      "masterVolume": 0.1,
      "aimAssistRadius": 60,
      "arrowMargin": 65,
      "lineWidth": 2,
      "seaGrid": 90,
      "seaWaveRows": 16,
      "seaWaveCols": 24,
      "currentArrowGap": 120,
      "wakeWidth": 22,
      "shipLength": 58,
      "shipWidth": 29,
      "enemyLength": 48,
      "enemyWidth": 24,
      "bossLength": 230,
      "bossWidth": 105,
      "moduleRadius": 27,
      "coreRadius": 35,
      "resourceDigits": 0,
      "maxFrameMs": 100,
      "tutorialTipDuration": 8,
      "autoLockGrace": 1.2,
      "half": 0.5,
      "eventLimit": 12,
      "enemyHpScale": 0.45,
      "weaponIntervalPower": 0.25,
      "ramDamageScale": 1,
      "throwUpgradeScale": 0.8,
      "throwBlastRadius": 75,
      "throwBlastScale": 0.25,
      "droneRepair": 1.2,
      "shieldDurationScale": 0.08,
      "allyTurretScale": 0.2,
      "allyRangeBonus": 200,
      "allyRadius": 18,
      "allyStartOffset": 0.4,
      "startInvulnerability": 2,
      "enemyStartDelay": 1.7,
      "enemyStartSpread": 1.6,
      "wreckScatter": 45,
      "autoAimExtra": 40,
      "movingThreshold": 0.28,
      "muzzleRadius": 17,
      "damageFloatOffset": 20,
      "hitRadius": 20,
      "bossExplosionRadius": 230,
      "explosionRadius": 68,
      "signalReward": 10,
      "bossWreckValue": 2,
      "bossWreckRadius": 40,
      "blastFalloff": 2,
      "friendlyBlastScale": 0.22,
      "arcLife": 0.2,
      "engineerGrappleBonus": 50,
      "grappleCooldown": 0.38,
      "collisionDrag": 0.7,
      "turnThreshold": 12,
      "wakeThreshold": 30,
      "wakeOffset": 27,
      "mineOffset": 35,
      "mineLife": 16,
      "mineArm": 0.5,
      "mineRadius": 95,
      "mineInterval": 3,
      "mineTrigger": 30,
      "bossShellSpeed": 205,
      "enemyShellLife": 5,
      "enemyStandOff": 0.85,
      "enemyRetreatRange": 0.65,
      "enemyOrbit": 0.25,
      "ramSelfDamage": 22,
      "allyShellSpeed": 520,
      "throwSplash": 0.36,
      "engineerPickupBonus": 45,
      "pursuitSpawnInset": 80,
      "pursuitSpread": 120,
      "floatRise": 32,
      "promotionHeal": 18,
      "particleMinLife": 0.4,
      "minRenderScale": 0.62,
      "maxRenderScale": 1.15,
      "playerLookDivisor": 3.5,
      "comboDigits": 1,
      "cooldownDigits": 1,
      "stickRadius": 0.3,
      "baseRegeneration": 0.15,
      "floatMergeRange": 18,
      "floatMergeTime": 0.12,
      "promotionPriority": 2,
      "heavyIslandDamage": 45,
      "shipCollisionSpeed": 145,
      "playerRamDamage": 22,
      "shipCollisionDamage": 8,
      "ramUpgradeScale": 0.5,
      "ramCooldown": 1.1,
      "impactStopThreshold": 100
    },
    "palette": {
      "sea": "#0b3445",
      "deep": "#082636",
      "waterLight": "#255568",
      "foam": "#c2e4d8",
      "island": "#446260",
      "sand": "#a2a388",
      "player": "#8cf1d5",
      "enemy": "#ff8c70",
      "gold": "#ffd079",
      "cargo": "#ffe09c",
      "wreck": "#b19e7c",
      "danger": "#ff735f",
      "ink": "#e8f2ee",
      "muted": "#9bbabf",
      "shield": "#9bdcff",
      "deck": "#604f3e",
      "playerTurret": "#e7e6b9",
      "enemyTurret": "#53332e",
      "current": "#75cfb5",
      "currentText": "#81b5b0",
      "shore": "#27707a",
      "rock": "#344c4b",
      "portRing": "#bfa974",
      "dock": "#9b8663",
      "cargoGlow": "#78663c",
      "signal": "#503e3b",
      "mapBorder": "#668b8e"
    },
    "port": {
      "x": 170,
      "y": 1010,
      "radius": 115
    },
    "carrier": {
      "x": 1260,
      "y": 380,
      "hp": 550,
      "radius": 35,
      "name": "보물선",
      "color": "#cf8569"
    },
    "modules": [
      {
        "id": "gun",
        "name": "포대",
        "x": -72,
        "y": -32,
        "hp": 170,
        "color": "#ee9978",
        "icon": "crosshair",
        "hint": "부수면 보물선 포격 중단"
      },
      {
        "id": "magazine",
        "name": "화약고",
        "x": -72,
        "y": 32,
        "hp": 100,
        "color": "#ff704f",
        "icon": "burst",
        "hint": "폭파하면 주위 적과 선체에 큰 피해"
      },
      {
        "id": "vault",
        "name": "금고",
        "x": 68,
        "y": -32,
        "hp": 210,
        "color": "#ffd079",
        "icon": "scrap",
        "hint": "부수면 화물 3개가 쏟아짐"
      },
      {
        "id": "engine",
        "name": "기관",
        "x": 68,
        "y": 32,
        "hp": 135,
        "color": "#99cad4",
        "icon": "speed",
        "hint": "부수면 보물선 도주 중단"
      }
    ],
    "enemies": {
      "gunboat": {
        "name": "포격선",
        "hp": 86,
        "radius": 22,
        "speed": 74,
        "range": 380,
        "damage": 12,
        "interval": 3.1,
        "tell": 0.85,
        "shellSpeed": 220,
        "count": 3,
        "spread": 0.17,
        "scrap": 6,
        "xp": 8,
        "color": "#dc8e76",
        "mode": "gun"
      },
      "rammer": {
        "name": "돌격선",
        "hp": 72,
        "radius": 22,
        "speed": 100,
        "range": 290,
        "damage": 17,
        "interval": 4.5,
        "tell": 1,
        "shellSpeed": 0,
        "count": 1,
        "spread": 0,
        "scrap": 6,
        "xp": 8,
        "color": "#e7b46d",
        "mode": "ram",
        "chargeSpeed": 300,
        "chargeTime": 0.8
      },
      "mortar": {
        "name": "박격선",
        "hp": 100,
        "radius": 25,
        "speed": 50,
        "range": 560,
        "damage": 22,
        "interval": 4.4,
        "tell": 1.4,
        "shellSpeed": 170,
        "count": 1,
        "spread": 0,
        "scrap": 8,
        "xp": 10,
        "color": "#b7a4da",
        "mode": "mortar",
        "blastRadius": 76
      },
      "powder": {
        "name": "화약선",
        "hp": 28,
        "radius": 30,
        "speed": 0,
        "range": 0,
        "damage": 0,
        "interval": 99,
        "tell": 1,
        "shellSpeed": 0,
        "count": 0,
        "spread": 0,
        "scrap": 8,
        "xp": 10,
        "color": "#ff8055",
        "mode": "powder"
      }
    },
    "startEnemies": [
      {
        "type": "powder",
        "x": 590,
        "y": 635
      },
      {
        "type": "gunboat",
        "x": 715,
        "y": 620
      },
      {
        "type": "rammer",
        "x": 730,
        "y": 760
      },
      {
        "type": "gunboat",
        "x": 1160,
        "y": 560
      },
      {
        "type": "mortar",
        "x": 1450,
        "y": 620
      }
    ],
    "islands": [
      {
        "x": 465,
        "y": 300,
        "radius": 105
      },
      {
        "x": 940,
        "y": 920,
        "radius": 95
      },
      {
        "x": 1060,
        "y": 690,
        "radius": 65
      },
      {
        "x": 1590,
        "y": 900,
        "radius": 125
      }
    ],
    "currents": [
      {
        "x": 260,
        "y": 955,
        "w": 1270,
        "h": 170,
        "vx": -72,
        "vy": -4,
        "name": "빠른 귀환 물살"
      },
      {
        "x": 680,
        "y": 170,
        "w": 1080,
        "h": 100,
        "vx": 43,
        "vy": 0,
        "name": "빠른 접근 물살"
      }
    ],
    "signal": {
      "x": 1640,
      "y": 510,
      "radius": 24,
      "name": "증원 신호기"
    },
    "rescueCargo": [
      {
        "x": 790,
        "y": 320
      },
      {
        "x": 1190,
        "y": 890
      },
      {
        "x": 1550,
        "y": 750
      }
    ],
    "contracts": {
      "raid": {
        "name": "보물선 약탈",
        "goal": "화물 {target}개 회수 → 항구로 귀환",
        "target": 3,
        "cargoOnMap": false,
        "vaultCargo": 3
      },
      "hunt": {
        "name": "현상금 사냥",
        "goal": "보물선 격침 → 항구로 귀환",
        "target": 1,
        "cargoOnMap": false,
        "vaultCargo": 3
      },
      "rescue": {
        "name": "조난 선원 구조",
        "goal": "선원 {target}명 구조 → 항구로 귀환",
        "target": 3,
        "cargoOnMap": true,
        "vaultCargo": 2
      },
      "salvage": {
        "name": "난파 화물 인양",
        "goal": "화물 {target}개 회수 → 항구로 귀환",
        "target": 3,
        "cargoOnMap": true,
        "vaultCargo": 2
      }
    },
    "roles": {
      "vanguard": {
        "name": "방패선",
        "short": "포탄 차단·반사",
        "description": "선수에서 적 포탄을 막습니다. 방패 전개 중 맞은 포탄을 적에게 되쏩니다.",
        "offsetX": 65,
        "offsetY": 0,
        "color": "#83dcb8"
      },
      "engineer": {
        "name": "수리선",
        "short": "자동 수리·회수",
        "description": "근처에서 선체를 수리합니다. 수리 비용 -1, 수리량 +16, 잔해 회수 범위 증가.",
        "offsetX": -65,
        "offsetY": 60,
        "color": "#e3be77"
      },
      "sniper": {
        "name": "저격선",
        "short": "선택 부위 집중포격",
        "description": "조준 중인 부위를 긴 사거리에서 집중 공격합니다.",
        "offsetX": -65,
        "offsetY": -60,
        "color": "#ae9ded"
      },
      "medic": {
        "name": "구조선",
        "short": "강한 자동 회복",
        "description": "주변 함대의 내구를 지속적으로 회복합니다. 장기전과 만선 귀환에 적합합니다.",
        "offsetX": -90,
        "offsetY": 35,
        "color": "#8cd4ed"
      }
    },
    "milestones": {
      "first_powder": {
        "title": "첫 연쇄 폭파",
        "resources": {
          "alloy": 30,
          "data": 6
        },
        "xp": 36,
        "description": "첫 화약선 폭파 보상은 즉시 영구 저장됩니다."
      }
    },
    "abilities": [
      {
        "id": "grapple",
        "key": "E",
        "name": "잔해 잡기",
        "icon": "magnet",
        "hint": "잔해를 끌어와 방패로 사용. 한 번 더 누르면 조준 방향으로 투척."
      },
      {
        "id": "shield",
        "key": "Q",
        "name": "방패",
        "icon": "shield",
        "hint": "고철 3 · 적 포탄 차단. 방패선 편성 시 포탄 반사."
      },
      {
        "id": "repair",
        "key": "R",
        "name": "수리",
        "icon": "repair",
        "hint": "고철 6 · 선체 즉시 회복. 수리선이 비용과 회복량을 개선."
      }
    ],
    "bindings": {
      "KeyW": "up",
      "ArrowUp": "up",
      "KeyS": "down",
      "ArrowDown": "down",
      "KeyA": "left",
      "ArrowLeft": "left",
      "KeyD": "right",
      "ArrowRight": "right",
      "KeyE": "grapple",
      "Space": "grapple",
      "KeyQ": "shield",
      "KeyR": "repair",
      "KeyF": "recycle",
      "KeyP": "pause",
      "Escape": "pause"
    },
    "controls": [
      {
        "key": "WASD / 왼쪽 스틱",
        "text": "배 조종 · 물살 방향으로 가면 빨라짐"
      },
      {
        "key": "마우스 누르기 / 포격",
        "text": "조준한 곳에 함포 발사 · 적을 누르면 집중 조준"
      },
      {
        "key": "E / 잔해 잡기",
        "text": "잡은 잔해는 방패. 다시 누르면 강력한 투척탄"
      },
      {
        "key": "F / 분해",
        "text": "잡은 잔해를 고철로 바꿔 수리·방패 비용 마련"
      }
    ],
    "ui": {
      "storageKey": "scrapwake.campaign.v3",
      "settingsKey": "scrapwake.preferences.v2",
      "legacyKey": "scrapwake.run.v2",
      "saveVersion": 3,
      "toastMs": 3000,
      "animationMs": 500,
      "soundVolume": 0.05
    },
    "sounds": {
      "shot": {
        "frequency": 105,
        "end": 45,
        "duration": 0.08,
        "gain": 0.4,
        "type": "triangle"
      },
      "hit": {
        "frequency": 250,
        "end": 90,
        "duration": 0.055,
        "gain": 0.16,
        "type": "square"
      },
      "blast": {
        "frequency": 83,
        "end": 22,
        "duration": 0.3,
        "gain": 0.65,
        "type": "sawtooth"
      },
      "loot": {
        "frequency": 520,
        "end": 1080,
        "duration": 0.12,
        "gain": 0.25,
        "type": "sine"
      },
      "cargo": {
        "frequency": 640,
        "end": 1400,
        "duration": 0.35,
        "gain": 0.45,
        "type": "sine"
      },
      "launch": {
        "frequency": 145,
        "end": 420,
        "duration": 0.2,
        "gain": 0.45,
        "type": "triangle"
      },
      "hurt": {
        "frequency": 120,
        "end": 35,
        "duration": 0.16,
        "gain": 0.3,
        "type": "sawtooth"
      }
    },
    "draw": {
      "font": "system-ui, sans-serif",
      "smallFont": 12,
      "labelFont": 14,
      "bigFont": 21,
      "floatFont": 19,
      "moduleLabelOffset": 39,
      "healthWidth": 52,
      "healthHeight": 5,
      "bossHealthWidth": 205,
      "ringLine": 3,
      "waterAlpha": 0.16,
      "currentAlpha": 0.13,
      "particleSize": 3,
      "goldAlpha": 0.2,
      "cameraEase": 6,
      "mapScale": 0.085,
      "minimapSize": 154,
      "minimapHeight": 98,
      "screenArrowSize": 12,
      "lineWidth": 2,
      "textShadow": 4,
      "healthOffset": 13,
      "shadowAlpha": 0.4,
      "shadowOffset": 5,
      "shadowWidth": 0.62,
      "hullHalf": 0.5,
      "bowShoulder": 0.2,
      "sternEnd": 0.65,
      "deckBack": 0.38,
      "deckSide": 0.31,
      "deckLength": 0.58,
      "deckWidth": 0.62,
      "deckRib": 0.15,
      "cabinOffset": 0.12,
      "cabinWidth": 0.2,
      "cabinSize": 0.4,
      "hullOutline": 3,
      "waterGradientAlpha": 0.48,
      "currentSway": 8,
      "currentArrowAlpha": 0.26,
      "currentArrowLength": 24,
      "currentArrowTip": 12,
      "currentArrowWidth": 3,
      "currentTextOffset": 22,
      "waveSpeed": 0.5,
      "waveAmplitude": 20,
      "waveJitter": 13,
      "waveWidth": 40,
      "waveHeight": 5,
      "shoreWidth": 20,
      "shoreFoam": 13,
      "shoreSway": 3,
      "islandSides": 11,
      "islandInner": 0.82,
      "islandJagged": 0.09,
      "islandRocks": 4,
      "rockAngle": 2.4,
      "rockRing": 0.33,
      "rockSize": 0.16,
      "portLine": 3,
      "portReadyAlpha": 0.12,
      "portIdleAlpha": 0.04,
      "dockWidth": 110,
      "dockGap": 38,
      "dockThickness": 13,
      "portLabel": 25,
      "extractRing": 10,
      "extractLine": 8,
      "pickupBobSpeed": 2.5,
      "pickupBob": 4,
      "pickupRock": 0.15,
      "cargoGlow": 25,
      "cargoPulse": 3,
      "cargoPulseSize": 4,
      "crateHalf": 12,
      "crateBand": 3,
      "cargoLabelOffset": 29,
      "scrapHalf": 7,
      "tetherWidth": 3,
      "wreckOutline": 3,
      "wreckShoulder": 0.6,
      "wreckSide": 0.48,
      "wreckStern": 0.7,
      "wreckHealthWidth": 42,
      "wreckHintRing": 7,
      "wreckLabel": 20,
      "tellMinAlpha": 0.35,
      "tellMaxAlpha": 0.65,
      "tellWidth": 2,
      "tellDash": [
        10,
        8
      ],
      "tellTargetRadius": 22,
      "tellTargetWidth": 2,
      "markAlpha": 0.18,
      "markLine": 4,
      "mineSize": 6,
      "mineRing": 12,
      "bossBarOffset": 23,
      "bossLabelOffset": 44,
      "moduleOutline": 3,
      "moduleSize": 0.66,
      "gunLength": 1.4,
      "gunWidth": 10,
      "vaultLock": 8,
      "vaultLockWidth": 4,
      "engineRib": 8,
      "engineRibWidth": 4,
      "moduleHealthWidth": 44,
      "moduleBarBelow": 27,
      "moduleBarAbove": 32,
      "moduleLabelBelow": 43,
      "moduleLabelAbove": 49,
      "powderRock": 0.08,
      "powderDeck": 37,
      "powderHalf": 21,
      "powderGap": 19,
      "powderBarrel": 10,
      "powderLabel": 19,
      "enemyLabel": 19,
      "signalPulse": 2,
      "signalWave": 8,
      "signalLabel": 43,
      "lockGap": 8,
      "lockLine": 2,
      "lockTick": 7,
      "allyHealthWidth": 38,
      "allyLabel": 19,
      "shieldAlpha": 0.5,
      "shieldPulse": 16,
      "shieldPulseAlpha": 0.18,
      "shieldLine": 5,
      "shieldFill": 0.08,
      "maxCargoDraw": 5,
      "cargoTrailStart": 62,
      "cargoTrailGap": 24,
      "cargoTrailHalf": 9,
      "cargoRope": 1,
      "playerGunLength": 33,
      "playerGunWidth": 8,
      "playerGunBase": 9,
      "throwRotation": 8,
      "heavyShape": 0.6,
      "heavyOutline": 3,
      "heavyTrail": 0.06,
      "heavyTrailWidth": 3,
      "shotTrail": 0.045,
      "arcWidth": 4,
      "explosionRing": 6,
      "explosionStart": 0.15,
      "explosionCoreAlpha": 0.6,
      "arrowEpsilon": 0.001,
      "arrowSize": 11,
      "arrowShape": 0.7,
      "arrowLabelOffset": 24,
      "screenLabelFont": 13,
      "minimapMargin": 18,
      "minimapTop": 108,
      "minimapAlpha": 0.75,
      "mapIsland": 5,
      "mapPort": 4,
      "mapEnemy": 2,
      "mapCargo": 3,
      "mapPlayer": 3,
      "minimapBreakpoint": 1000,
      "shakeFrequency": 55,
      "shakeAxis": 0.8,
      "wakeAlpha": 0.22,
      "wakeLine": 2,
      "crosshairRadius": 13,
      "crosshairLine": 1,
      "crosshairTick": 5
    },
    "messages": {
      "shot": "포격",
      "kill": "{name} 격파",
      "chain": "연쇄 {count}척 격파!",
      "scrap": "+{value} 고철",
      "cargo": "화물 +1",
      "crew": "선원 +1",
      "grapple": "잔해 확보 · 투척하거나 분해하세요",
      "throw": "잔해 투척!",
      "recycle": "잔해 분해 +{value} 고철",
      "shield": "방패 전개",
      "reflect": "포탄 반사!",
      "repair": "선체 +{value}",
      "lack": "고철이 부족합니다",
      "cooldown": "재사용 대기 중",
      "noWreck": "가까운 잔해가 없습니다 · 고철 4로 압축탄 발사",
      "vault": "금고 파괴! 화물을 회수하세요",
      "engine": "기관 파괴 · 보물선 도주 중단",
      "gun": "포대 파괴 · 대형 포격 중단",
      "magazine": "화약고 연쇄 폭발!",
      "signal": "증원 중단!",
      "reinforce": "적 증원 접근",
      "pursuit": "화물을 노리는 추격선 접근!",
      "boss": "보물선 격침 · 추가 약탈 +{value}",
      "banked": "영구 보상 +30 합금 · +6 자료 · 진급 경험 +36",
      "rankUp": "{rank} 진급!",
      "win": "약탈 성공",
      "lose": "배가 침몰했습니다",
      "withdraw": "전리품을 지켜 귀항했습니다",
      "escape": "항구 도착 · 전리품 정산",
      "escaped": "보물선이 해역을 빠져나갔습니다",
      "damage": "-{value}",
      "critical": "{value}!",
      "saved": "진행 저장 완료",
      "loaded": "진행 불러오기 완료",
      "invalidSave": "저장 파일을 확인하세요",
      "migrated": "기존 계급·장비·연구를 보존하고 항구로 돌아왔습니다.",
      "fullHp": "선체가 이미 온전합니다",
      "newCampaign": "새 약탈 항해를 시작합니다.",
      "saveReady": "진행을 저장 파일로 내보냈습니다.",
      "crash": "좌초 충돌! 추가 피해"
    },
    "text": {
      "title": "고철 해적",
      "eyebrow": "SEA RAID",
      "pause": "정박 / 메뉴",
      "resume": "계속 항해",
      "port": "항구",
      "sortie": "출항",
      "next": "다음 해역 출항",
      "attack": "포격",
      "scrap": "고철",
      "cargo": "화물",
      "hull": "선체",
      "goal": "목표",
      "wave": "물살",
      "loot": "이번 약탈",
      "rank": "계급",
      "retreat": "즉시 귀항",
      "retreatBody": "현재 전리품 일부를 챙겨 귀항합니다. 계급·장비·연구는 유지됩니다.",
      "confirm": "귀항하기",
      "cancel": "돌아가기",
      "target": "조준",
      "grapple": "잔해 잡기",
      "throw": "잔해 투척",
      "compressed": "압축탄 · 4",
      "recycle": "분해 +{value}",
      "carrying": "잔해 방패",
      "repair": "수리",
      "shield": "방패",
      "fireHint": "누르고 있으면 포격",
      "move": "조종",
      "autoAim": "적을 누르면 집중 조준",
      "escapeReady": "만선! 항구로 빠져나가세요",
      "huntReady": "현상금 확보! 항구로 귀환하세요",
      "bossEscape": "보물선 이탈 {time}",
      "engineStopped": "보물선 도주 중단",
      "reinforce": "증원 {time}초",
      "noReinforce": "추가 증원 없음",
      "combo": "연쇄 ×{value}",
      "powderTip": "붉은 화약선을 쏴 보세요",
      "wreckTip": "잔해에 접근 → E로 잡기 → E로 적에게 투척",
      "vaultTip": "금고를 부수면 화물이 쏟아집니다",
      "cargoTip": "반짝이는 화물을 회수하세요",
      "exitTip": "왼쪽 항구로 귀환 · 아래쪽 물살을 타면 빨라집니다",
      "huntTip": "화약고를 터뜨리고 선체를 격침하세요",
      "salvageTip": "표시된 화물을 회수하세요. 적을 전부 잡을 필요는 없습니다.",
      "lowHp": "위험! 고철로 수리하거나 항구로 피하세요",
      "bank": "영구 창고",
      "report": "약탈 결과",
      "gained": "확보한 자원",
      "experience": "획득 경험",
      "career": "지휘관",
      "kills": "격파",
      "bestChain": "최대 연쇄",
      "cargoCount": "회수 화물",
      "time": "항해 시간",
      "repairCost": "고철 {cost} · 선체 +{amount}",
      "shieldCost": "고철 {cost} · {seconds}초",
      "quickUpgrade": "다음 출항 전 원하는 장비를 강화할 수 있습니다.",
      "kept": "계급·장비·연구·동료 훈련은 유지됩니다.",
      "helpTitle": "조종과 약탈",
      "helpShort": "붉은 화약선은 폭발하고, 난파선은 무기가 됩니다. 물살·섬·잔해로 포격을 막고 전리품을 항구로 가져오세요.",
      "aboutScrap": "고철은 수리·방패·압축탄이 함께 사용합니다. 잔해를 분해하면 보충됩니다.",
      "aboutFleet": "방패선은 포탄 반사, 수리선은 회복, 저격선은 집중 공격을 담당합니다. 같은 배를 중복 편성할 수도 있습니다.",
      "helpWreck": "잡은 잔해는 앞에서 포탄을 막습니다. 투척하면 큰 피해, 분해하면 수리 자금이 됩니다.",
      "helpGoal": "금고의 화물을 회수한 뒤 항구로 돌아오면 승리합니다. 기관을 부수면 도주를 막고, 포대를 부수면 적 공격이 줄어듭니다.",
      "sound": "효과음",
      "save": "저장 내보내기",
      "load": "저장 불러오기",
      "settings": "설정",
      "menu": "메뉴",
      "close": "닫기",
      "enemy": "적",
      "locked": "집중 조준",
      "rewardAlready": "첫 폭파 보상 수령 완료",
      "escapeProgress": "귀항 중",
      "partialEscape": "화물이 부족해도 항구로 돌아가면 일부 전리품을 보존합니다.",
      "crewLabel": "선원",
      "fleet": "동료 함대",
      "canvasLabel": "해상 약탈 전장. 왼쪽 스틱 또는 WASD로 항해, 포격 버튼 또는 마우스로 공격합니다.",
      "throwHint": "무료 · 큰 피해",
      "grabHint": "무료 · 포탄 방패",
      "scrapCost": "고철 {cost}",
      "saveReady": "진행을 저장 파일로 내보냈습니다.",
      "invalidSave": "저장 파일을 확인하세요",
      "subtitle": "해상 약탈 액션"
    }
  }
};
