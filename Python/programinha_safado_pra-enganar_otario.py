import pyautogui as auto
import
auto.PAUSE = 2

for i in range(1, 100):
    if i % 2 == 0:
        auto.write(f"if({i}%2==0){{console.log('o numero é par')}}")
    else:
        auto.write(f"if({i}%2==0){{console.log('o numero é impar')}}")
