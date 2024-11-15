// 课程数据
const coursesData = [
    {
        id: 'ai-writing',
        title: 'AI写作',
        description: '使用 ChatGPT、文心一言等AI工具，提升写作效率',
        level: '无需技术基础',
        uses: [
            '文章写作与润色',
            '营销文案生成',
            '学术论文辅助',
            '多语言翻译'
        ],
        icon: 'fas fa-pen-fancy'
    },
    {
        id: 'ai-image',
        title: 'AI图片',
        description: '掌握 Midjourney、Stable Diffusion 等AI绘画技术',
        level: '无需绘画基础',
        uses: [
            '艺术图像创作',
            '商业海报设计',
            '产品展示图生成',
            '图片风格转换'
        ],
        icon: 'fas fa-image'
    },
    {
        id: 'ai-code',
        title: 'AI代码',
        description: 'GitHub Copilot、Claude 等AI编程助手使用指南',
        level: '适合所有开发者',
        uses: [
            '代码智能补全',
            '程序开发加速',
            '代码优化建议',
            'Bug修复辅助'
        ],
        icon: 'fas fa-code'
    }
];

// 创建课程卡片
function createCourseCard(course) {
    return `
        <div class="course-card">
            <div class="icon-wrapper">
                <i class="${course.icon} fa-3x"></i>
            </div>
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="course-info">
                <span class="course-badge">${course.level}</span>
            </div>
            <div class="course-uses">
                <h4>主要功能：</h4>
                <ul>
                    ${course.uses.map(use => `<li>${use}</li>`).join('')}
                </ul>
            </div>
            <button onclick="startLearning('${course.id}')" class="start-button">
                开始使用 ${course.title}
            </button>
        </div>
    `;
}

// 渲染所有课程卡片
function renderCourses() {
    const container = document.getElementById('courses-container');
    container.innerHTML = coursesData.map(course => createCourseCard(course)).join('');
}

// 开始学习功能
function startLearning(courseId) {
    console.log(`开始使用: ${courseId}`);
    // 这里可以添加课程跳转逻辑
}

// 页面加载完成后渲染课程
document.addEventListener('DOMContentLoaded', renderCourses); 