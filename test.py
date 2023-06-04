topic = 'BreathPractices'
art = ['дыхательных практик', 'дыхательной практики', 'дыхательную практику']
s = f'''
%=================================================================================================
\\textbf{{{topic}Controller}}
\\newline

Метод \\foreignlanguage{{english}}{{{topic}}} возвращает 
представление \\foreignlanguage{{english}}{{{topic}.cshtml}} 
в котором выводиться описание {art[0]} из таблицы \\foreignlanguage{{english}}{{{topic}}}
\\newline

Метод \\foreignlanguage{{english}}{{Create{topic}}} 
возвращает представление \\foreignlanguage{{english}}{{Create{topic}.cshtml}} 
в котором выводиться форма для добавления новой {art[1]}. 
\\newline

Метод \\foreignlanguage{{english}}{{Update{topic}}} 
возвращает представление \\foreignlanguage{{english}}{{Update{topic}.cshtml}} 
в котором выводиться форма для редактирования существующей {art[1]}. 
Входной параметр id статьи.
\\newline

Метод \\foreignlanguage{{english}}{{Create{topic}POST}} записывает новую {art[2]} в базу. 
Входной параметр \\foreignlanguage{{english}}{{Create{topic}VM vm}}. 
При создании новой {art[1]} отправляется push уведомление
\\newline

Метод \\foreignlanguage{{english}}{{Update{topic}POST}} перезаписывает 
существующую {art[2]} в базу. Входной параметр объект 
\\foreignlanguage{{english}}{{Create{topic}VM vm}}.
\\newline

Метод \\foreignlanguage{{english}}{{Delete{topic}}}.Удаляет {art[2]} из базы. Входной параметр 
\\foreignlanguage{{english}}{{int id}}.
\\newline
%================================================================================================
'''

with open('res.txt', 'w', encoding="utf-8") as f:
    f.write(s)