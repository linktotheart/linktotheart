extends Area2D

var movement := Vector2(0, -1)
var speed := 550.0
# Called every frame. 'delta' is the elapsed time since the previous frame.
func _physics_process(delta):
	global_position += speed * movement.rotated(rotation) * delta


func _on_visible_on_screen_notifier_2d_screen_exited():
	queue_free()
	


func _on_area_entered(area):
	if area is Astroid:
		var ast = area
		ast.explode()
