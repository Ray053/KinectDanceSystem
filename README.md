# KinectDanceSystem
Kinect Dance System 是一個結合了 Unity、Vue.js 和 Kinect 技術的動作分析與舞蹈學習平台。此系統能夠捕捉使用者的動作，進行 Laban 動作分析，並提供即時反饋與教學指導。
## 功能特色

動作捕捉：使用 Kinect 捕捉使用者的動作數據
即時分析：基於 Laban 動作分析法進行動作評估
互動式學習：透過 WebGL 提供視覺化的動作引導
課程管理：完整的課程管理系統，包含各種舞蹈與動作類型
學習歷程：記錄使用者的學習進度與成果
用戶管理：多用戶支持，包含不同權限設置

## 技術架構

**前端**：Vue 3 + Nuxt 3 + Tailwind CSS + shadcn/vue \
**3D 渲染**：Unity WebGL \
**動作捕捉**：Kinect \
**動作分析**：基於 HumanMotionAnalysis 的 Laban 動作分析 \
**後端**：Node.js + Express \

## Setup

Make sure to install the dependencies:

```bash
# git
git clone https://github.com/Ray053/UnityDanceSystem.git
cd UnityDanceSystem

# pnpm
pnpm run dev

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
