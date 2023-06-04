res = ''
di = [(
    'BreathPractices',
    'BreathPractice practice',
    ['дыхательных практик', 'дыхательной практики', 'дыхательную практику']
    ),
    (
    'ExerciseCategories',
    'ExerciseCategory category',
    ['категорий упражнений', 'категории упражнения', 'категорию упражнения']
    ),
    (
    'PracticeCategories',
    'PracticeCategory category',
    ['категорий практик', 'категории практики', 'категорию практики']
    ),
    (
    'TopicCategories',
    'TopicCategory category',
    ['категорий статей', 'категории статей', 'категорию статьи']
    ),
    (
    'TestCategories',
    'TestCategory category',
    ['категорий тестов', 'категории тестов', 'категорию теста']
    ),
    
    (
    'Factors',
    'Factor factor',
    ['трекеров настроения', 'записи трекера настроения', 'запись трекера настроения']
    ),

    (
    'FactorDetailsController',
    'CreateFactorDetailVM vm',
    ['детали трекеров настроения', 'записи деталей трекера настроения', 'запись деталей трекера настроения']
    ),

    (
    'FactorDetailsController',
    'CreateFactorDetailVM vm',
    ['детали трекеров настроения', 'записи деталей трекера настроения', 'запись деталей трекера настроения']
    ),
    
    (
    'Tests',
    'TestStartPageVM vm',
    ['тестов', 'записи теста', 'запись теста']
    ),

    (
    'Tests',
    'TestStartPageVM vm',
    ['тестов', 'записи теста', 'запись теста']
    ),

    (
    'UserAvatars',
    'UserAvatar avatar',
    ['аватарок пользователей', 'аватарки пользователя', 'аватарку пользователя']
    ),

    (
    'Languages',
    'Language language',
    ['локализаций', 'локализации', 'локализацию']
    )

    ]

for topic, par, art in di:
    s = f'''
    %=======================================================================================
    \\textbf{{{topic}Controller}}
    \\newline

    Метод {topic} возвращает 
    представление {topic}.cshtml 
    в котором выводиться описание {art[0]} из таблицы {topic}
    \\newline

    Метод Create{topic}
    возвращает представление Create{topic}.cshtml
    в котором выводиться форма для добавления новой {art[1]}. 
    \\newline

    Метод Update{topic} 
    возвращает представление Update{topic}.cshtml
    в котором выводиться форма для редактирования существующей {art[1]}. 
    Входной параметр id {art[1]}.
    \\newline

    Метод Create{topic}POST записывает новую {art[2]} в базу. 
    Входной параметр {par}. 
    При создании новой {art[1]} отправляется пуш уведомление
    \\newline

    Метод Update{topic}POST перезаписывает 
    существующую {art[2]} в базу. 
    Входной параметр объект {par}.
    \\newline

    Метод Delete{topic}.Удаляет {art[2]} из базы. Входной параметр 
    int id.
    \\newline
    %=====================================================================================
    '''
    res += s

with open('res.txt', 'w', encoding="utf-8") as f:
    f.write(res)