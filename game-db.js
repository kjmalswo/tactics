// Editable game database. JSON-compatible data only; runtime logic stays in index.html.
window.GAME_DB = {
  "_docs": {
    "title": "SCRAPWAKE · 폭주 항로 · 콘텐츠 DB",
    "editing": "이 파일의 window.GAME_DB 객체만 편집해 밸런스·기체·무기·적·성장·지역·문구를 관리합니다. JSON 호환 객체를 유지하고 실행 코드는 넣지 않습니다.",
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
    "standalone": "DB 편집기에서 DB 파일 또는 모든 코드·데이터가 포함된 단일 HTML 실행본을 내보낼 수 있습니다."
  },
  "meta": {
    "title": "폭주 항로",
    "english": "SCRAPWAKE",
    "tagline": "멈추지 마라. 잔해를 무기로 바꿔라.",
    "objective": "중계기 3개 수리 → 추격 요새 격파 → 탈출",
    "description": "움직이는 고철 폭풍 속에서 기체를 몰고, 쓰러진 적을 자력 장갑과 폭발 연료로 재활용하는 액션 로그라이트.",
    "extractionName": "긴급 탈출 항로",
    "version": "2.0"
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
      "muted": "#8babb2"
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
      "shakeScale": 5
    },
    "settings": {
      "storageKey": "scrapwake.run.v2",
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
      "tutorialSeconds": 35
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
      "version": "ACTION / STRATEGY / ROGUELITE",
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
      "hull": "선체",
      "shield": "실드",
      "scrap": "고철 장갑",
      "level": "LV",
      "xp": "성장",
      "kills": "격파",
      "timer": "항해 시간",
      "pressure": "전장 위협",
      "objective": "돌파 목표",
      "objectiveShort": "거점 확보",
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
      "relayHint": "빛나는 원 안에서 싸우면 점령이 진행됩니다.",
      "combatHint": "이동만 해도 자동 사격합니다. 적 잔해를 회수해 성장하세요.",
      "scrapHint": "고철을 남기면 장갑, E로 쓰면 광역 폭발.",
      "bossHint": "붉은 돌진 경고를 보고 옆으로 대시하세요.",
      "extractHint": "탈출 원 안에서 버티면 항로 돌파 완료!",
      "map": "전술 지도",
      "build": "이번 항로의 빌드",
      "emptyBuild": "잔해를 회수하면 새 개조를 선택할 수 있습니다.",
      "upgrades": "장착한 개조",
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
      "export": "진행 저장",
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
      "firstHint": "WASD로 이동하면 비행정이 자동으로 적을 공격합니다.",
      "mobileHint": "왼쪽 조이스틱으로 이동하고 아래 능력 버튼을 누르세요.",
      "manualHint": "마우스를 누르면 그 방향으로 직접 조준합니다.",
      "dash": "추진 돌파",
      "burst": "자력 폭발",
      "turret": "포탑 전개",
      "controlsMove": "이동",
      "controlsAim": "직접 조준",
      "controlsDash": "대시 / 회피",
      "controlsBurst": "고철로 광역 반격",
      "controlsTurret": "자동 포탑 설치",
      "controlsPause": "전술 정지",
      "controlKeysMove": "W A S D / 방향키",
      "controlKeysAim": "마우스 누르기",
      "controlKeysDash": "SPACE",
      "controlKeysBurst": "E",
      "controlKeysTurret": "Q",
      "controlKeysPause": "P / ESC",
      "helpEyebrow": "LESS READING. MORE RAIDING.",
      "helpTitle": "이것만 알면 바로 출격.",
      "helpFooter": "자동 사격이 기본입니다. 처음에는 움직이며 대시로 피하는 것부터 시작하세요. 능력은 아래 버튼으로도 사용할 수 있습니다.",
      "dbEyebrow": "TUNE YOUR OWN WASTELAND",
      "dbTitle": "전장의 설계 데이터",
      "dbBody": "수치·무기·적·개조·맵·문구는 game-db.js에서 관리합니다. 아래에서 검증하고 DB 파일 또는 현재 데이터를 포함한 단일 HTML을 내보낼 수 있습니다.",
      "dbHelp": "저장소 변경은 game-db.js에 반영하세요. 무기는 weapons, 적은 enemies, 개조는 upgrades, 비행정은 rigs, 전투 규칙은 config에서 수정합니다. 자세한 스키마는 _docs를 확인하세요.",
      "dbValidate": "DB 검증",
      "dbOkay": "데이터 구조와 참조가 유효합니다.",
      "dbInvalid": "DB 구조를 확인하세요.",
      "dbReset": "원본 복원",
      "dbDownload": "DB 파일 받기",
      "htmlDownload": "단일 HTML 받기",
      "dbNote": "내려받은 game-db.js를 index.html과 같은 폴더에 두면 적용됩니다. 단일 HTML은 파일 하나만으로 실행됩니다.",
      "fileName": "폭주_항로.html",
      "saveName": "폭주_항로_저장.json",
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
      "revision": "REALTIME REBUILD · 02",
      "attackEffect": "범위 반격",
      "armor": "피해 감소"
    },
    "abilityKeys": {
      "dash": "SPACE",
      "burst": "E",
      "turret": "Q"
    },
    "help": [
      {
        "icon": "move",
        "title": "움직이며 쏜다",
        "body": "WASD 또는 방향키로 이동하세요. 가까운 적을 자동으로 공격합니다. 마우스를 누르면 원하는 방향으로 사격할 수 있습니다.",
        "key": "WASD"
      },
      {
        "icon": "dash",
        "title": "대시는 생존이자 공격",
        "body": "위험한 탄막과 돌진은 옆으로 대시해서 피하세요. 적을 관통하며 충돌 피해를 줄 수도 있습니다.",
        "key": "SPACE"
      },
      {
        "icon": "magnet",
        "title": "잔해로 흐름을 뒤집는다",
        "body": "적이 남긴 잔해를 회수하면 성장합니다. 모은 고철은 장갑이 되고, 자력 폭발을 쓰면 주변의 적을 밀어냅니다.",
        "key": "E"
      },
      {
        "icon": "turret",
        "title": "원하는 전선을 만든다",
        "body": "포탑으로 한쪽 길을 막고 중계기를 확보하세요. 확보 순서와 개조 선택은 자유입니다. 모두 확보하면 추격 요새가 나타납니다.",
        "key": "Q"
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
      "health": "\u003cpath d='M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z'/>"
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
        "label": "controlsAim",
        "key": "controlKeysAim"
      },
      {
        "label": "controlsDash",
        "key": "controlKeysDash"
      },
      {
        "label": "controlsBurst",
        "key": "controlKeysBurst"
      },
      {
        "label": "controlsTurret",
        "key": "controlKeysTurret"
      },
      {
        "label": "controlsPause",
        "key": "controlKeysPause"
      }
    ]
  }
};
