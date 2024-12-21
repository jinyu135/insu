let R1 = 0
let M = 0
let L_1 = 0
maqueenPlusV2.I2CInit()
basic.forever(function () {
    L_1 = maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1)
    M = maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1)
    R1 = maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1)
    if (L_1 == 0 && (M == 1 && R1 == 0)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    }
    if (L_1 == 1 && (M == 1 && R1 == 0)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 40)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
    }
    if (L_1 == 0 && (M == 1 && R1 == 1)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 40)
    }
})
