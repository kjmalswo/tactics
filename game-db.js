// Editable game database. JSON-compatible data only; runtime logic stays in index.html.
window.GAME_DB = {
  "_docs": {
    "title": "SCRAPWAKE · 폭주 항로 · 콘텐츠 DB",
    "editing": "게임 데이터 원본은 game-db.js 하나입니다. campaign/tactics/ui에서 필요한 키를 먼저 검색하고 해당 범위만 읽어 수정합니다. 엔진은 index.html에 있으며 DB를 참조합니다.",
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
    "campaign": "campaign: 영구 성장, 정비고 모듈, 연구, 분대, 교리, 분기 전선, 작전 보상과 경제. 임무가 끝나도 기체·계급·장비·연구를 초기화하지 않습니다.",
    "tactics": "tactics: 분대 명령, 보급 연결, 거점 역할, 전장 건설, 증원, 적 공세와 4종 임무. nodes/structures/config에서 규칙과 수치를 수정합니다."
  },
  "meta": {
    "title": "폭주 항로",
    "english": "SCRAPWAKE",
    "tagline": "멈추지 마라. 잔해를 무기로 바꿔라.",
    "objective": "영구 기체 설계 → 분대·보급선 지휘 → 작전 보상과 다음 전선",
    "description": "기체와 장비가 남는 전략 캠페인. 분대를 지휘하고 보급선을 운영하며 고철 전선을 확장합니다.",
    "extractionName": "긴급 탈출 항로",
    "version": "3.0"
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
      "scrapArmor": 0.25
    },
    "turretAggroRadius": 420,
    "turretAggroBias": 1.35,
    "defaultAutoFire": true,
    "scrapArmorCap": 3
  },
  "rigs": [
    {
      "id": "skimmer",
      "name": "질주형 스키머",
      "description": "빠른 이동과 연사포. 달리며 틈을 만들고 고철 폭풍으로 포위를 뚫습니다.",
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
      "name": "돌파형 브레이커",
      "description": "튼튼한 차체와 산탄포. 적진으로 돌진해 잔해를 모으고, 근거리에서 한꺼번에 터뜨립니다.",
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
      "name": "방전형 볼타",
      "description": "즉시 명중하는 연쇄 전격. 거리와 포탑을 활용하며 밀집한 추격자를 차례로 분해합니다.",
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
      "name": "리벳 연사포",
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
      "name": "산개 파쇄포",
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
      "name": "연쇄 방전기",
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
      "brand": "폭주 항로",
      "english": "SCRAPWAKE",
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
      "dbBody": "영구 성장·정비고·연구·항로는 campaign, 야전 전술·시설·작전 규칙은 tactics에서 관리합니다. 모든 데이터의 원본은 game-db.js입니다.",
      "dbHelp": "영구 모듈은 campaign.modules, 연구는 campaign.research, 임무는 campaign.sectors, 동료는 campaign.units, 시설은 tactics.structures를 수정하세요. 수치·문구·규칙은 DB에 두고 HTML은 참조합니다.",
      "dbValidate": "DB 검증",
      "dbOkay": "데이터 구조와 참조가 유효합니다.",
      "dbInvalid": "DB 구조를 확인하세요.",
      "dbReset": "원본 복원",
      "dbDownload": "DB 파일 받기",
      "htmlDownload": "단일 HTML 받기",
      "dbNote": "내려받은 game-db.js를 index.html과 같은 폴더에 두면 적용됩니다. 단일 HTML은 파일 하나만으로 실행됩니다.",
      "fileName": "폭주_항로_캠페인.html",
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
      "revision": "COMMAND & CONQUER YOUR ROUTE · 03",
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
      "titleKicker": "YOUR FLEET. YOUR FRONT.",
      "titleTagline": "보급선을 그려라.\n전선을 움직여라.",
      "titleBody": "끝나지 않는 고철 전선. 기체를 설계하고, 분대를 지휘하고, 당신만의 항로를 개척하라.",
      "titleStart": "캠페인 시작",
      "titleContinue": "계속하기",
      "titleHeadquarters": "작전 본부",
      "titleGarage": "기체 정비고",
      "titleGuide": "플레이 가이드",
      "titleSettings": "설정",
      "titleFooter": "영구 성장 · 분대 전술 · 분기 캠페인",
      "titleSaveNote": "진행은 이 브라우저에 자동 저장됩니다.",
      "titleCareer": "지휘관 계급",
      "titleSectors": "확보 전선",
      "titleModules": "보유 장비",
      "titleSorties": "출격 기록",
      "titleNoProgress": "당신의 첫 전선이 기다립니다.",
      "titleActiveMission": "진행 중인 작전이 있습니다. 이어서 지휘할 수 있습니다.",
      "titleCampaignReady": "정비고와 전선 지도에서 다음 작전을 준비하세요.",
      "settingsTitle": "항해 설정",
      "settingsEyebrow": "SET YOUR COURSE",
      "settingsBody": "글자 크기·조준·소리·전체화면을 조정하세요. 설정을 바꿔도 캠페인 진행과 장비는 유지됩니다.",
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
      "newGameBody": "현재 캠페인의 계급·기체 강화·장비·연구·부대 편성과 진행 중인 작전이 초기화됩니다. 소리와 화면 설정은 유지됩니다.",
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
      "magnet": "\u003cpath d='M5 3v10a7 7 0 0 0 14 0V3h-5v10a2 2 0 0 1-4 0V3H5Zm0 5h5m4 0h5'/>",
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
      "restart": "\u003cpath d='M3 9V3m0 6h6M3 9a9 9 0 1 1 0 7'/>"
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
        "name": "과급 리벳",
        "description": "주무기 공격 속도 +25%. 빠른 사격으로 접근하기 전에 분해합니다.",
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
        "name": "균열 탄두",
        "description": "모든 주무기 피해 +25%. 전격과 산탄에도 적용됩니다.",
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
        "name": "분열 총구",
        "description": "주무기 발사체 +1, 발사각이 조금 넓어집니다.",
        "icon": "weapon",
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
        "name": "관통 심",
        "description": "발사체가 적 1기를 추가 관통합니다.",
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
        "name": "도전성 잔해",
        "description": "공격 적중 시 다른 적에게 1회 연쇄 전격.",
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
        "name": "고전압 코일",
        "description": "연쇄 전격 사거리 +70, 연쇄 피해 +15%p.",
        "icon": "bolt",
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
        "name": "분쇄 궤도",
        "description": "고철 장갑의 접촉 피해 +3. 고철을 아껴 근접전을 강화합니다.",
        "icon": "scrap",
        "stats": [
          {
            "stat": "orbitDamage",
            "op": "add",
            "value": 3
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
        "name": "확장 자력장",
        "description": "잔해와 경험치 회수 반경 +65. 위험한 회수 동선을 줄입니다.",
        "icon": "scrap",
        "stats": [
          {
            "stat": "pickupRadius",
            "op": "add",
            "value": 65
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
        "name": "질주 사격",
        "description": "움직이는 동안 주무기 피해 +20%.",
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
        "name": "애프터버너",
        "description": "이동 속도 +12%, 부스트 재사용 시간 -12%.",
        "icon": "speed",
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
        "name": "충각 이빨",
        "description": "부스트 충돌 피해 +25. 돌진을 공격 수단으로 바꿉니다.",
        "icon": "armor",
        "stats": [
          {
            "stat": "dashDamage",
            "op": "add",
            "value": 25
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
        "name": "위상 연료",
        "description": "부스트 재사용 시간 -22%. 무적 진입과 탈출이 빨라집니다.",
        "icon": "speed",
        "stats": [
          {
            "stat": "dashCooldown",
            "op": "multiply",
            "value": 0.78
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
        "name": "자력 폭심",
        "description": "고철 폭풍 피해 +18, 반경 +35.",
        "icon": "burst",
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
        "name": "응축 자석",
        "description": "고철 폭풍 재사용 시간 -22%.",
        "icon": "burst",
        "stats": [
          {
            "stat": "burstCooldown",
            "op": "multiply",
            "value": 0.78
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
        "name": "연동 포탑",
        "description": "포탑 피해 +6, 지속 시간 +4초.",
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
            "value": 4
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
        "name": "접이식 포탑",
        "description": "포탑 재사용 시간 -25%. 점령 지대를 방어하세요.",
        "icon": "turret",
        "stats": [
          {
            "stat": "turretCooldown",
            "op": "multiply",
            "value": 0.75
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
        "name": "회수 드론",
        "description": "자동 공격하는 보조 드론 +1. 회수와 기동에 집중할 수 있습니다.",
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
        "name": "드론 가속기",
        "description": "보조 드론 공격 속도 +35%. 드론 보유 시 효과적입니다.",
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
        "name": "잔향 기뢰",
        "description": "부스트 시 출발점에 기뢰 +1. 추격자를 역으로 터뜨립니다.",
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
        "name": "열압 탄피",
        "description": "탄환 명중 시 반경 45 폭발. 밀집한 적에게 효과적입니다.",
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
        "name": "재생 방벽",
        "description": "최대 보호막 +15. 피격을 피하면 자동 재생합니다.",
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
        "description": "적 처치마다 선체 1.5 회복. 전투를 이어갈수록 버팁니다.",
        "icon": "repair",
        "stats": [
          {
            "stat": "killHeal",
            "op": "add",
            "value": 1.5
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
        "description": "받는 공격 피해 -2. 매 공격의 최소 피해는 1입니다.",
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
        "description": "최대 선체 +25, 선체 25 회복.",
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
        "name": "틈새 조준",
        "description": "치명타 확률 +12%p. 치명타는 기본 피해의 1.8배입니다.",
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
        "name": "우회 신호기",
        "description": "중계기 수리 속도 +30%, 고철 4개 즉시 획득.",
        "icon": "relay",
        "stats": [
          {
            "stat": "relaySpeed",
            "op": "add",
            "value": 0.3
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
        "name": "반응 차폐",
        "description": "적 처치마다 보호막 +3.",
        "icon": "shield",
        "stats": [
          {
            "stat": "killShield",
            "op": "add",
            "value": 3
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
        "description": "전장의 보급 생산량 +20%. 구조물과 아군 운용에 투자합니다.",
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
        "description": "고전압 코일을 설계할 수 있습니다. 전격 연쇄 거리 +25.",
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
        "description": "전장 건설 비용 -20%. 중계기 확보 속도 +15%.",
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
            "stat": "relaySpeed",
            "op": "add",
            "value": 0.15
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
        "description": "동료 체력 +20%, 보급 생산 +15%, 포탑 사거리 +50.",
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
        "name": "철벽 선봉정",
        "description": "앞에서 적의 주의를 끌고 거점을 지킵니다. 방어선 유지에 적합합니다.",
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
        "name": "회수 공병정",
        "description": "아군과 구조물을 수리하고 거점을 빠르게 확보합니다. 보급선을 잇는 지원 부대입니다.",
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
        "name": "장거리 포격정",
        "description": "긴 사거리와 높은 단발 화력. 적 전력 거점을 우회 타격하거나 선봉 뒤에서 화력을 집중합니다.",
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
        "name": "야전 의무정",
        "description": "동료를 회복하며 긴 전선을 유지합니다. 공격력은 낮지만 재집결 시간을 줄입니다.",
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
        "name": "기동 우회 교리",
        "description": "이동 속도 +8%, 거점 확보 +10%. 빈 곳을 찌르고 적의 보급선을 끊습니다.",
        "icon": "speed",
        "stats": [
          {
            "stat": "speed",
            "op": "multiply",
            "value": 1.08
          },
          {
            "stat": "relaySpeed",
            "op": "add",
            "value": 0.1
          }
        ],
        "supportStats": []
      },
      {
        "id": "siege",
        "name": "화력 집중 교리",
        "description": "직접 화력 +10%, 동료 화력 +15%. 실드 재생은 20% 느려집니다.",
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
        "name": "보급 방어 교리",
        "description": "실드 +10, 포탑 수명 +4초, 보급 생산 +20%. 이동 속도는 5% 감소합니다.",
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
        "name": "녹슨 정박지",
        "kind": "assault",
        "description": "적 전력 거점을 끊으면 요새의 방어가 약해집니다. 가장 먼저 확보할 전진 기지.",
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
          "supplyStart": 70
        },
        "final": false
      },
      {
        "id": "lifeline",
        "name": "끊어진 생명선",
        "kind": "convoy",
        "description": "보급 수송정을 호위하세요. 교전 지역을 먼저 정리하고 부대를 길목에 배치해야 합니다.",
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
          "supplyStart": 65
        },
        "final": false
      },
      {
        "id": "plant",
        "name": "자력 발전소",
        "kind": "defense",
        "description": "적의 역습을 버티며 연결된 거점을 유지하세요. 전력과 보급을 나누어 지킬 부대가 필요합니다.",
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
          "supplyStart": 65
        },
        "final": false
      },
      {
        "id": "forge",
        "name": "회색 주조소",
        "kind": "salvage",
        "description": "흩어진 설계 화물을 회수하세요. 전장을 모두 쓸어버릴 필요 없이 운반 경로를 열면 됩니다.",
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
          "supplyStart": 60
        },
        "final": false
      },
      {
        "id": "refuge",
        "name": "방벽 피난항",
        "kind": "defense",
        "description": "분산된 전선을 이어 역습을 막으세요. 공병과 수리 구조물로 장기 방어선을 구축합니다.",
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
          "supplyStart": 65
        },
        "final": false
      },
      {
        "id": "rail",
        "name": "폐철로 수송로",
        "kind": "convoy",
        "description": "좁은 잔해 지대를 통과하는 수송대를 보호하세요. 포격정을 전진 배치하면 추격을 줄일 수 있습니다.",
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
          "supplyStart": 60
        },
        "final": false
      },
      {
        "id": "spire",
        "name": "침묵의 관제탑",
        "kind": "salvage",
        "description": "적 증원이 많은 구역의 정보를 회수하세요. 관제 시설을 먼저 장악하면 진격 방향을 읽을 수 있습니다.",
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
          "supplyStart": 65
        },
        "final": false
      },
      {
        "id": "harbor",
        "name": "철갑 함대 정박지",
        "kind": "assault",
        "description": "적 요새와 전력 시설을 동시에 압박하세요. 정면 공격과 보급 차단 중 무엇에 투자할지 선택합니다.",
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
          "supplyStart": 70
        },
        "final": false
      },
      {
        "id": "heart",
        "name": "심층 기관 심장부",
        "kind": "assault",
        "description": "전선의 심장부. 축적한 장비와 연구, 부대 편성으로 마지막 방어망을 무너뜨리세요.",
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
          "supplyStart": 75
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
      "missionCancelled": "손상되거나 시작하지 못한 작전 예약을 해제했습니다. 영구 성장은 유지됩니다."
    },
    "ui": {
      "text": {
        "eyebrow": "COMMAND THE FRONTIER",
        "title": "다음 전선을, 당신의 설계로.",
        "subtitle": "기체·개조·연구는 출격이 끝나도 남습니다. 전선을 선택하고, 부대를 편성하고, 원하는 전술로 돌파하세요.",
        "career": "지휘관",
        "level": "LV",
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
          "assault": "거점 강습",
          "convoy": "수송대 호위",
          "defense": "전선 방어",
          "salvage": "위험 인양"
        },
        "missionHints": {
          "assault": "보급선을 끊어 적 거점을 약화시키거나, 화력을 집중해 정면으로 돌파하세요.",
          "convoy": "수송대의 앞길을 확보하세요. 분대를 나눠 거점을 장악하면 호위 부담이 줄어듭니다.",
          "defense": "생산과 수리를 연결해 방어선을 만드세요. 모든 부대가 같은 곳에 있을 필요는 없습니다.",
          "salvage": "인양 위치와 귀환 경로를 계획하세요. 필요한 전력 거점을 먼저 확보할 수도 있습니다."
        },
        "garageTitle": "기체와 장비 설정",
        "garageBody": "기체를 고르고 → 장착할 칸을 선택하고 → 장비의 장착 버튼을 누르세요. 구입한 장비는 사라지지 않으며 언제든 바꿀 수 있습니다.",
        "activeRig": "사용할 기체",
        "rigRank": "기체 강화",
        "rigUpgrade": "기체 강화하기",
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
        "statPreview": "현재 설계 성능",
        "statSource": "기체 · 영구 성장 · 장착 장비 · 연구 · 운용 방식을 모두 반영한 실제 수치입니다.",
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
        "squadTitle": "출격할 동료와 운용 방식",
        "squadBody": "바꿀 출격 자리를 고른 뒤 동료의 배치 버튼을 누르세요. 동료는 자동으로 전투하며, 출격 후에는 이동·공격·점령 명령을 내릴 수 있습니다.",
        "squadSlots": "바꿀 출격 자리",
        "squadSlot": "출격 자리",
        "emptySquad": "동료를 배치하세요",
        "assign": "편성",
        "assigned": "이 자리에 배치됨",
        "selectSquad": "편성할 분대 선택",
        "doctrine": "부대 운용 방식 — 하나만 선택",
        "selected": "선택 중",
        "select": "선택",
        "unitHp": "버티는 체력",
        "unitDamage": "한 발 피해",
        "unitRange": "공격 거리",
        "unitSpeed": "속도",
        "role": "역할",
        "unitLocked": "연구로 개방",
        "doctrineHint": "선택한 운용 방식은 다음 출격부터 기체와 동료 전체에 적용됩니다. 비용 없이 바꿀 수 있습니다.",
        "commandHint": "전술 정지는 생각할 시간입니다. 이동한 뒤 반응하는 대신, 아군을 나눠 배치하고 적의 공격 방향을 바꿔보세요.",
        "debriefEyebrow": "AFTER ACTION REPORT",
        "victoryTitle": "이 전선은 우리의 것이다.",
        "defeatTitle": "패배는 장비를 빼앗지 못한다.",
        "withdrawTitle": "전력을 보존하고, 다음 수를 준비한다.",
        "victoryBody": "자원과 경험을 정산했습니다. 확보한 구역의 수입과 새 항로를 확인하고, 다음 출격에 맞춰 설계를 바꾸세요.",
        "defeatBody": "기존 기체 강화·장비·연구는 그대로 남습니다. 이번 작전의 회수분으로 정비하고 같은 구역에 다시 도전할 수 있습니다.",
        "withdrawBody": "작전을 중단하고 회수 가능한 전리품을 정산했습니다. 영구 성장과 장비는 유지됩니다.",
        "gained": "회수한 자원",
        "xpGained": "획득 경험",
        "newLevel": "지휘관 성장",
        "newSectors": "새 전선 개방",
        "retained": "장비 · 기체 강화 · 연구 유지",
        "debriefTime": "작전 시간",
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
        "rigSwitchHint": "기체를 바꾸면 주무기가 달라집니다. 맞지 않는 장비는 파괴되지 않고 창고로 돌아갑니다.",
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
        "unitRole": "전투 역할",
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
        "unitHelp": "배치한 동료는 다음 출격 때 함께 나갑니다. 전투에서 파괴되어도 해금과 훈련 등급은 유지됩니다."
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
          "label": "선체 내구도",
          "format": "number"
        },
        {
          "key": "maxShield",
          "label": "최대 실드",
          "format": "number"
        },
        {
          "key": "damage",
          "label": "주무기 화력",
          "format": "multiplier"
        },
        {
          "key": "fireRate",
          "label": "공격 속도",
          "format": "multiplier"
        },
        {
          "key": "speed",
          "label": "이동 속도",
          "format": "number"
        },
        {
          "key": "armor",
          "label": "기본 피해 감소",
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
          "label": "최대 실드",
          "unit": "",
          "format": "flat"
        },
        "damage": {
          "label": "주무기 위력",
          "unit": "%",
          "format": "percent"
        },
        "fireRate": {
          "label": "공격 속도",
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
          "label": "자력 폭발 대기시간",
          "unit": "초",
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
          "label": "치명타 확률",
          "unit": "%",
          "format": "percent"
        },
        "dashCooldown": {
          "label": "대시 대기시간",
          "unit": "초",
          "format": "flat"
        },
        "dashDamage": {
          "label": "대시 충돌 피해",
          "unit": "",
          "format": "flat"
        },
        "droneCount": {
          "label": "지원 드론",
          "unit": "기",
          "format": "flat"
        },
        "droneRate": {
          "label": "드론 사격 간격",
          "unit": "초",
          "format": "flat"
        },
        "killHeal": {
          "label": "처치 시 내구 회복",
          "unit": "",
          "format": "flat"
        },
        "killShield": {
          "label": "처치 시 실드 회복",
          "unit": "",
          "format": "flat"
        },
        "mineCount": {
          "label": "대시 기뢰",
          "unit": "개",
          "format": "flat"
        },
        "movingDamage": {
          "label": "이동 중 추가 위력",
          "unit": "%",
          "format": "percent"
        },
        "orbitDamage": {
          "label": "고철 장갑 접촉 피해",
          "unit": "",
          "format": "flat"
        },
        "pickupRadius": {
          "label": "잔해 회수 거리",
          "unit": "",
          "format": "flat"
        },
        "pierce": {
          "label": "추가 관통 대상",
          "unit": "명",
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
          "label": "탄환 폭발 범위",
          "unit": "",
          "format": "flat"
        },
        "spreadBonus": {
          "label": "발사각 확장",
          "unit": "",
          "format": "flat"
        },
        "turretCooldown": {
          "label": "포탑 대기시간",
          "unit": "초",
          "format": "flat"
        },
        "turretDamage": {
          "label": "포탑 피해",
          "unit": "",
          "format": "flat"
        },
        "turretDuration": {
          "label": "포탑 유지시간",
          "unit": "초",
          "format": "flat"
        },
        "chain": {
          "label": "연쇄 전격",
          "unit": "회",
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
    }
  },
  "tactics": {
    "config": {
      "supplyStart": 55,
      "supplyCap": 180,
      "supplyIncome": 1.4,
      "incomeInterval": 1,
      "hqIncome": 0.45,
      "linkRadius": 790,
      "nodeCaptureTime": 13,
      "playerCaptureWeight": 1.35,
      "allyCaptureWeight": 1,
      "enemyCaptureWeight": 0.72,
      "captureWeightCap": 2.5,
      "contestedCaptureMultiplier": 0.55,
      "neutralDecay": 0.03,
      "buildRadius": 215,
      "structureSpacing": 58,
      "structureLimit": 9,
      "maxAllies": 5,
      "reinforcementCost": 38,
      "reinforcementCostByRole": {
        "assault": 34,
        "tank": 44,
        "support": 40
      },
      "reinforcementRadius": 75,
      "hqHp": 1050,
      "hqRadius": 42,
      "hqRepair": 0.6,
      "hqDefeat": true,
      "allyRadius": 17,
      "allySpacing": 62,
      "formationAngle": 2.399963229728653,
      "followDistance": 105,
      "arrivalDistance": 24,
      "holdLeash": 210,
      "engageRange": 440,
      "enemyAggroRange": 460,
      "allyProjectileSpeed": 680,
      "allyProjectileRadius": 3,
      "allyProjectileLife": 0.95,
      "allyFireRate": 0.62,
      "allyDamage": 11,
      "allyHp": 145,
      "allySpeed": 190,
      "allyRange": 360,
      "allyArmor": 0,
      "allyRepairRate": 5,
      "supportRange": 170,
      "repairSupplyPerHp": 0.04,
      "allyAvoidRadius": 65,
      "allyAvoidWeight": 2.5,
      "allySeparation": 0.3,
      "tankAggroBias": 0.65,
      "structureAggroBias": 0.78,
      "convoyAggroBias": 0.8,
      "enemyPlanInterval": 20,
      "enemyPlanWindup": 5,
      "enemyPlanSupplyWeight": 1.3,
      "enemyPlanIsolatedWeight": 0.65,
      "enemyNodeDefendRadius": 130,
      "enemyRaidChance": 0.72,
      "enemyMissionScale": 0.2,
      "missionWaveCountBonus": 0.5,
      "bossPowerDamageMultiplier": 0.3,
      "friendlyPowerDamageBonus": 0.12,
      "friendlyPowerTurretBonus": 0.2,
      "powerRadius": 290,
      "intelRevealRange": 1600,
      "nodeRepairRate": 3,
      "nodeRepairRadius": 165,
      "retreatMinTime": 15,
      "retreatRadius": 200,
      "extractionTime": 4,
      "defenseDuration": 105,
      "convoyHp": 550,
      "convoyRadius": 31,
      "convoySpeed": 90,
      "convoyEscortRadius": 250,
      "convoyThreatRadius": 155,
      "convoyContestedMultiplier": 0.38,
      "convoyArrivalRadius": 35,
      "cratesRequired": 4,
      "crateCollectRadius": 65,
      "crateRadius": 18,
      "crateAlloy": 5,
      "crateData": 2,
      "nodeAlloy": 3,
      "nodeXp": 10,
      "startingGarrison": 1,
      "missionXpPerKill": 1.5,
      "structurePowerRegen": 2,
      "structureShotSpeed": 710,
      "structureShotRadius": 3,
      "structureShotLife": 0.9,
      "structureRepairTick": 0.5,
      "baseNodeId": "hq",
      "missionBossScale": 1,
      "convoyCaptureBonus": 0.12,
      "coverRadius": 85,
      "coverArmor": 3,
      "catchupDistanceMultiplier": 3,
      "catchupSpeedMultiplier": 1.28,
      "followStopDistance": 28,
      "captureStandRadius": 0.3,
      "attackStandRange": 0.75,
      "nodeRadius": 140,
      "garrisonOffset": 55
    },
    "hq": {
      "id": "hq",
      "x": 430,
      "y": 1030,
      "hp": 1050,
      "radius": 42,
      "color": "#a5efcf",
      "name": "전진 지휘소"
    },
    "nodes": [
      {
        "id": "supply",
        "name": "서부 보급창",
        "x": 770,
        "y": 790,
        "radius": 140,
        "owner": "neutral",
        "role": "supply"
      },
      {
        "id": "power",
        "name": "중앙 발전소",
        "x": 1320,
        "y": 620,
        "radius": 140,
        "owner": "enemy",
        "role": "power"
      },
      {
        "id": "intel",
        "name": "동부 관제탑",
        "x": 1770,
        "y": 1070,
        "radius": 140,
        "owner": "enemy",
        "role": "intel"
      },
      {
        "id": "factory",
        "name": "남부 조립소",
        "x": 1150,
        "y": 1360,
        "radius": 140,
        "owner": "neutral",
        "role": "factory"
      }
    ],
    "nodeRoles": {
      "supply": {
        "name": "보급창",
        "description": "연결된 동안 야전 보급을 생산합니다. 끊어진 보급선을 탈환해 생산을 복구하세요.",
        "color": "#f1c37b",
        "icon": "scrap",
        "income": 1.4
      },
      "power": {
        "name": "발전소",
        "description": "아군 화력을 증폭합니다. 적이 보유하면 요새의 방어장을 유지합니다.",
        "color": "#9ac8ec",
        "icon": "bolt",
        "income": 0.35
      },
      "intel": {
        "name": "관제탑",
        "description": "연결되면 적의 다음 공세 목표와 도착 시간을 미리 확인할 수 있습니다.",
        "color": "#c4a8ed",
        "icon": "relay",
        "income": 0.35
      },
      "factory": {
        "name": "조립소",
        "description": "연결된 이곳에서 분대를 증원하고 주변 아군을 수리합니다.",
        "color": "#a5efcf",
        "icon": "turret",
        "income": 0.55
      }
    },
    "structures": {
      "turret": {
        "name": "연결 포대",
        "description": "보급망 안에서 자동 사격. 발전소 연결 시 화력이 증가합니다.",
        "role": "turret",
        "icon": "turret",
        "color": "#a5efcf",
        "cost": 28,
        "hp": 180,
        "radius": 20,
        "range": 440,
        "damage": 15,
        "fireRate": 0.55
      },
      "repair": {
        "name": "야전 정비소",
        "description": "주변 기체와 분대를 야전 보급을 소모하여 수리합니다.",
        "role": "repair",
        "icon": "repair",
        "color": "#8fb9e5",
        "cost": 30,
        "hp": 150,
        "radius": 22,
        "range": 190,
        "repairRate": 7
      },
      "barricade": {
        "name": "충격 방벽",
        "description": "높은 내구도로 적의 사격과 접근을 받아내 전선을 지탱합니다.",
        "role": "barricade",
        "icon": "shield",
        "color": "#f1c37b",
        "cost": 16,
        "hp": 420,
        "radius": 34,
        "range": 0
      }
    },
    "convoy": {
      "x": 430,
      "y": 1030,
      "waypoints": [
        {
          "x": 770,
          "y": 790
        },
        {
          "x": 1320,
          "y": 620
        },
        {
          "x": 1770,
          "y": 1070
        },
        {
          "x": 1970,
          "y": 1450
        }
      ],
      "color": "#f1c37b"
    },
    "crates": [
      {
        "x": 660,
        "y": 450
      },
      {
        "x": 1420,
        "y": 430
      },
      {
        "x": 1860,
        "y": 850
      },
      {
        "x": 1740,
        "y": 1510
      },
      {
        "x": 980,
        "y": 1460
      },
      {
        "x": 390,
        "y": 1320
      }
    ],
    "text": {
      "missionStarted": "{name} 작전 개시. 분대를 나누고 보급망을 확보하세요.",
      "commandIssued": "{count}개 분대에 {order} 명령을 전달했습니다.",
      "invalidCommand": "사용할 수 없는 분대 명령입니다.",
      "noUnits": "명령할 분대를 선택하세요.",
      "unitDestroyed": "{name} 전투 불능. 기체와 장비는 캠페인에서 유지됩니다.",
      "nodeCaptured": "{name} 확보. 보급망 연결을 확인하세요.",
      "nodeLost": "{name} 탈환당했습니다. 고립된 거점을 지원하세요.",
      "structureBuilt": "{name} 건설 완료.",
      "notConnected": "연결된 아군 거점 근처에 건설해야 합니다.",
      "buildBlocked": "다른 시설이나 잔해와 너무 가깝습니다.",
      "supplyShort": "야전 보급이 부족합니다.",
      "structureLimit": "건설 한도에 도달했습니다.",
      "unitLimit": "분대 편성 한도에 도달했습니다.",
      "notFactory": "연결된 조립소 또는 지휘소를 선택하세요.",
      "reinforced": "{name} 증원 도착.",
      "notTactical": "캠페인 작전에서 사용할 수 있습니다.",
      "notPlanning": "작전 진행 또는 전술 정지 상태에서 사용할 수 있습니다.",
      "unknownStructure": "알 수 없는 시설입니다.",
      "unknownUnit": "사용할 수 없는 분대입니다.",
      "retreatEarly": "작전 시작 직후에는 철수할 수 없습니다.",
      "retreatUnsafe": "아군 지휘소 또는 연결된 거점으로 이동한 뒤 철수하세요.",
      "withdraw": "긴급 철수. 회수한 자원을 정산하고 기지로 복귀합니다.",
      "headquartersLost": "전진 지휘소가 파괴되었습니다. 부대는 기지로 후퇴합니다.",
      "convoyLost": "호송선이 파괴되었습니다. 남은 부대가 기지로 후퇴합니다.",
      "convoyComplete": "호송선이 항로를 통과했습니다. 탈출 지점으로 복귀하세요.",
      "defenseComplete": "방어 임무 완료. 적의 추격을 벗어나 복귀하세요.",
      "salvageComplete": "필수 인양량 확보. 추가 수색 또는 탈출을 선택하세요.",
      "crateCollected": "보급 상자 회수. 합금 +{alloy}, 설계 자료 +{data}.",
      "powerShield": "발전소가 적 요새의 방어장을 유지하고 있습니다.",
      "enemyPlan": "{name}에 적 공세 준비 중.",
      "victory": "작전 성공. 다음 전선과 영구 성장을 정비하세요.",
      "defeat": "기체를 회수했습니다. 장비를 유지한 채 다시 계획할 수 있습니다.",
      "assaultGoal": "적 요새 격파 후 탈출",
      "convoyGoal": "호송선 호위 후 탈출",
      "defenseGoal": "지휘소 방어 후 탈출",
      "salvageGoal": "보급 상자 인양 후 탈출",
      "order_move": "이동",
      "order_attack": "집중 공격",
      "order_hold": "거점 방어",
      "order_follow": "호위",
      "order_capture": "거점 확보",
      "planning": "명령 대기",
      "supply": "야전 보급",
      "connected": "보급 연결",
      "isolated": "고립",
      "intelUnknown": "관제탑을 확보하면 공세 정보가 공개됩니다.",
      "convoyName": "호송선",
      "crateName": "보급 상자"
    },
    "_docs": {
      "missions": "mission.kind=assault|convoy|defense|salvage. mission.world는 nodes,hq,convoy,crates,playerStart,bossSpawn,obstacles를 덮어쓸 수 있습니다. mission.mission에는 defenseDuration,convoyHp,cratesRequired,enemyScale,supplyStart를 지정합니다.",
      "orders": "command({unitIds,kind,x,y,targetId,queue})는 전술 정지 중에도 허용됩니다. move|attack|hold|follow|capture. 선택된 분대가 기본 대상이며 capture는 targetId 거점을 참조합니다.",
      "network": "지휘소부터 linkRadius 내 아군 거점을 연결합니다. 연결된 보급창은 자원을, 발전소는 화력, 관제탑은 적 공세 정보, 조립소는 증원과 수리를 제공합니다."
    }
  }
};
